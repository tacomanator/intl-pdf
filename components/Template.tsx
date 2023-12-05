import {
  Document,
  Font,
  Page as PdfPage,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useFormatter } from "next-intl";

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

export default function Template() {
  const format = useFormatter();

  return (
    <Document>
      <PdfPage size="A6" style={styles.page}>
        <View>
          <Text>{format.number(123456789, "currency")}</Text>
        </View>
      </PdfPage>
    </Document>
  );
}
