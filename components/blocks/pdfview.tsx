export const SimplePDFViewer = () => (
  <object
    data="/panduan.pdf"
    type="application/pdf"
    width="100%"
    height="600px"
  >
    <p>
      Your browser does not support PDFs.{" "}
      <a href="/file.pdf">Download it instead.</a>
    </p>
  </object>
);
