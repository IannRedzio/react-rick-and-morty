import React from "react";
import { Container, Button } from "@chakra-ui/react";

const NavPage = ({ page, setPage }) => {
  return (
    <Container>
      <p>Page: {page}</p>
      <Button onClick={() => setPage(page + 1)}>Page {page + 1}</Button>
    </Container>
  );
};

export default NavPage;
