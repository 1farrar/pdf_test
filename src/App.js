import React, { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

// https://pdf.ac/C1NoX

// "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"

const App = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc:
          "https://carleton.ca/financialservices/wp-content/uploads/sample_signature_form_carleton_u_v5.pdf",
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
