import React from "react";
import { Image, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Stack
      bgImage="url('http://www.script-tutorials.com/demos/360/images/stars.png')"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        src="/images/logo.15c5ace1.png"
        maxW={{ base: "95%", sm: "100%", md: "70%", lg: "60%" }}
        mb={{ base: "20%", sm: "5%" }}
        mt={{ base: "45%", sm: "0%", md: "10%", lg: "8%", xl: "0%" }}
        ml={{ base: "3%", sm: "2%" }}
      />
      <Button
        colorScheme="teal"
        bg="#00b1c9"
        color="#80fc63"
        w={{ base: "120px", sm: "300px" }}
        h="50px"
        fontSize={{ base: "20px", sm: "25px" }}
        fontWeight="bold"
      >
        <Link to="/home">Start</Link>
      </Button>
    </Stack>
  );
};

export default Landing;
