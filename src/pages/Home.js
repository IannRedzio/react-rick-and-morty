import React from "react";
import Header from "../components/Header";
import { Box } from "@chakra-ui/react";
import CharacterList from "../components/CharacterList";

const Home = () => {
  return (
    <Box>
      <Header />
      <CharacterList />
    </Box>
  );
};

export default Home;
