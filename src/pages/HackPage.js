import React from "react";
import { useState, useEffect, useContext, useRef } from "react";

import AuthContext from "../store/auth-context";
import AppContext from "../store/app-context";
import { makeStyles } from "@material-ui/core/styles";
import FileDownloader from "../components/File/FileDownloader";

import {
  retrieveEntities,
  Entities,
  Group,
} from "../components/Entity/EntityUtil";
// import MockAWSData from "../services/MockAWSData";

import { Box, CircularProgress, Typography } from "@material-ui/core";

import _ from "lodash";

import DocumentCentre from "../components/Entity/DocumentCentre";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: "calc(100vh - 100px)",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

function HackPage() {
  const [files, setFiles] = useState([]);

  const [result, setResult] = useState();

  const authCtx = useContext(AuthContext);
  const appCtx = useContext(AppContext);
  // const history = useHistory();
  // const mockData = MockAWSData();

  const classes = useStyles();
  const imageRef = useRef();

  if (window.chrome.webview != null) {
    // window.chrome.webview.postMessage("CANCEL");
    window.chrome.webview.addEventListener("message", (event) => {
      console.log(event.data);
      var hostAuthentication = JSON.parse(event.data);
      authCtx.login(hostAuthentication.AuthenticationToken);
      appCtx.setUserId(hostAuthentication.ID);
      console.log(authCtx, appCtx);
    });
  }

  useEffect(() => {
    // Update the image that's been loaded
    // Onlly does images just now.
    if (files.length > 0) {
      localStorage.setItem("filename", files[0].name);
      updateImage(files[0]);
      retrieveEntities(
        files,
        (result) => {
          setResult(result);
        },
        Group.TYPE
      );
    } else {
      localStorage.removeItem("filename");
    }
  }, [files]);

  const updateImage = (file) => {
    imageRef.current.src = URL.createObjectURL(file);
  };

  const handleFilesDownloaded = (downloadedFiles) => {
    var filesArray = [];
    for (let i = 0; i < downloadedFiles.length; i++) {
      filesArray.push(downloadedFiles[i]);
    }
    setFiles(filesArray);
  };

  return (
    <Box display="flex" flexGrow="1">
      {files.length < 1 ? (
        <FileDownloader
          onFilesDownloaded={handleFilesDownloaded}
        ></FileDownloader>
      ) : (
        <img alt="letter" ref={imageRef} height="100%" />
      )}

      {files.length > 0 && result == null && (
        <Box position="absolute" top="50%" right="25%" justifyContent="center">
          <CircularProgress />
          <Typography variant="h6">Analysing...</Typography>
        </Box>
      )}

      {result != null && (
        <Box display="flex" flexGrow="1">
          <DocumentCentre model={result}></DocumentCentre>
        </Box>
      )}
    </Box>
  );
}
export default HackPage;
