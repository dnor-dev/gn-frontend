"use client";

import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import PdfViewer from "./components/pdf-viewer";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      state: "",
      fee: 0,
    },
    onSubmit: (values) => {
      onOpen();
    },
  });

  return (
    <main>
      <Container mt={20} mb={10}>
        <PdfViewer isOpen={isOpen} onClose={onClose} data={formik.values} />
        <Heading textAlign={"center"}>PDF Generator</Heading>

        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={5} mt={5}>
            <FormControl>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input
                id="country"
                name="country"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="state">State</FormLabel>
              <Input
                id="state"
                name="state"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.state}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="fee">Registration Fee</FormLabel>
              <Input
                id="fee"
                name="fee"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.fee}
              />
            </FormControl>
            <Button colorScheme="green" width={"full"} type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Container>
    </main>
  );
}
