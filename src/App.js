import React, { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

// https://pdf.ac/C1NoX

const App = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc:
          "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf",
      },
      viewer.current
    ).then((instance) => {});
  }, []);

  return (
    <div className="App">
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
