import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        GalaxyNotes
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        Galaxynotes can be used to write notes in a better way.
      </Text>
    </Box>
  );
}
