import React from "react";
import { Container, Button } from "@chakra-ui/react";

const NavPage = ({ page, setPage }) => {
  return (
    <Container display="flex" justifyContent="space-between">
      <Button onClick={() => setPage(page - 1)}>Prev Page</Button>
      <Button onClick={() => setPage(page + 1)}>Next Page</Button>
    </Container>
  );
};

export default NavPage;
