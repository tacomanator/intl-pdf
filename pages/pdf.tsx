import {
  Document,
  Font,
  PDFViewer,
  Page as PdfPage,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useFormatter } from "next-intl";
import { useEffect, useState } from "react";

Font.register({ family: "NotoSerifJP", src: "/NotoSerifJP-Regular.otf" });

const styles = StyleSheet.create({
  page: {
    fontFamily: "NotoSerifJP",
    flexDirection: "row",
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Page() {
  const format = useFormatter();

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <PDFViewer width="100%" height="1000">
          <Document>
            <PdfPage size="A6" style={styles.page}>
              <View>
                <Text>{format.number(123456789, "currency")}</Text>
              </View>
            </PdfPage>
          </Document>
        </PDFViewer>
      )}
    </>
  );
}
