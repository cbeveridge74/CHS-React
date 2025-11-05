import { useState, useEffect } from "react";
import classes from "./FileDownloader.module.css";
import { DropzoneArea } from "material-ui-dropzone";

const FileDownloader = (props) => {
  const [files, setFiles] = useState();

  useEffect(() => {
    //console.log( files );
    if (files != null) {
      
      props.onFilesDownloaded(files);
    
    }
  }, [files]);

  const handleChange = (files) => {
    if (files != null && files.length > 0) {
      setFiles(files);
    }
  };

  return (
    <div className={classes.filedownloader}>
      {/* <input type="file" multiple={true} onChange={(event) => { setFiles( event.target.files ) }}/> */}
      <DropzoneArea onChange={handleChange} />
    </div>
  );
};
export default FileDownloader;
