import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  PDFViewer,
} from "@react-pdf/renderer";

interface Props {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    state: string;
    fee: number;
  };
  isOpen: boolean;
  onClose: () => void;
}

const styles = StyleSheet.create({
  document: {
    width: "100%",
    height: "100%",
  },
  body: {
    flexGrow: 1,
    padding: 10,
  },
  page: {
    backgroundColor: "#fff",
  },
  pageHeader: {
    margin: 20,
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30,
  },
});

const PdfViewer = ({ data, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
      <ModalOverlay />
      <ModalContent h="90vh">
        <ModalCloseButton />
        <ModalBody>
          <VStack h="full">
            <PDFViewer height="100%" width="80%">
              <Document style={styles.document}>
                <Page size="A4" style={styles.page}>
                  <View>
                    <View>
                      <Text style={styles.pageHeader}>Invoice</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>First Name</Text>
                      <Text>{data.firstName}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>Last Name</Text>
                      <Text>{data.lastName}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>Email Address</Text>
                      <Text>{data.email}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>Country</Text>
                      <Text>{data.country}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>State</Text>
                      <Text>{data.state}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>Registration Fee</Text>
                      <Text>{data.fee}</Text>
                    </View>
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PdfViewer;
