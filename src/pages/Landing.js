import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Box
      bgImage="url('http://www.script-tutorials.com/demos/360/images/stars.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        src="/images/logo.15c5ace1.png"
        w="500px"
        h="500px"
        objectFit="contain"
      />
      <Button colorScheme="teal" bg="#00b1c9" color="#80fc63" size="lg">
        <Link to="/home">Start</Link>
      </Button>
    </Box>
  );
};

export default Landing;
