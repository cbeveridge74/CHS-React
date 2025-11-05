const FileUploaderUtil = (img, file, resultCallback) => {
  const reader = new FileReader();
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener(
    "progress",
    function (e) {
      if (e.lengthComputable) {
        //const percentage = Math.round((e.loaded * 100) / e.total);
        // this is to calc how far through the upload it is.  Not using ATM
      }
    },
    false
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
     // console.log(xhr.response);
      resultCallback(xhr.response);
    }
  };
  //https://api.vision-dev.co.uk/hackathon/v1/test
  //k, the url is https://api.vision-dev.co.uk/utilities/v1/blobStore. it needs 2 headers: x-api-key, and Authorization, which is the usual vision token header. for the payloads it will be as per the docs.
  xhr.open("POST", "https://api.vision-dev.co.uk/hackathon/v1/test"); //https://textract.us-west-2.amazonaws.com
  xhr.setRequestHeader("x-api-key", "");
  // xhr.setRequestHeader("Content-Type","application/x-amz-json-1.1")

  // xhr.open("POST", "https://us-west-2.console.aws.amazon.com/textract/api/textract");//https://textract.us-west-2.amazonaws.com
  // xhr.setRequestHeader("X-Amz-User-Agent", "aws-sdk-js/2.874.0 promise")
  // xhr.setRequestHeader("Content-Type","application/x-amz-json-1.1")
  // xhr.setRequestHeader("X-Amz-Target","Textract.GetDocumentAnalysis")
  // xhr.setRequestHeader("X-Textract-Consumer","Console")
  // xhr.setRequestHeader("path","/")
  // xhr.setRequestHeader("method","POST")
  // xhr.setRequestHeader("region","us-west-2")
  // xhr.setRequestHeader("params","{}")
  // xhr.setRequestHeader("contentString",'{"JobId","4773e5de6e9fcb229465bfcf467980ac046d16aa6cd58d7a7a98ba045f593292')
  // xhr.setRequestHeader("operation","getDocumentAnalysis")

  // xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');

  reader.onload = function (evt) {
    // console.log( typeof evt.target.result );
    // console.log( evt.target.result );
   // console.log( evt.target.result );
    const b64 = test1(evt.target.result);
   // console.log( b64 );
    xhr.send( b64 );
  };
  reader.readAsArrayBuffer(file);
  
  //reader.readAsDataURL(file);
  return reader;
};

function test1(ab) {
  var binary = '';
  const bytes = new Uint8Array(ab);
  for (var len = bytes.byteLength, i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}



export default FileUploaderUtil;
