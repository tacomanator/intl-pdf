import Template from "@/components/Template";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

export default function Page() {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <PDFViewer width="100%" height="1000">
          <Template />
        </PDFViewer>
      )}
    </>
  );
}
