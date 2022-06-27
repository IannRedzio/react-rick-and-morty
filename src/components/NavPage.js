import React from "react";
import { Container, Button } from "@chakra-ui/react";

const NavPage = ({ page, setPage }) => {
  return (
    <Container display="flex" justifyContent="center">
      <Button
        colorScheme="teal"
        bg="#00b1c9"
        color="#80fc63"
        onClick={() => setPage(page - 1)}
        mr={10}
      >
        Prev Page
      </Button>
      <Button
        colorScheme="teal"
        bg="#00b1c9"
        color="#80fc63"
        onClick={() => setPage(page + 1)}
      >
        Next Page
      </Button>
    </Container>
  );
};

export default NavPage;
