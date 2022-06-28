import { useState, useEffect } from "react";
import Character from "./Character";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import NavPage from "./NavPage";
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
    }
    fetchData();
  }, [page]);

  return (
    <>
      <NavPage page={page} setPage={setPage} />
      <Flex justifyContent="center">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
          gap={8}
        >
          {characters.map((character) => (
            <GridItem
              w={{ base: "250px", sm: "300px" }}
              bg="#00b1c9"
              borderRadius="10"
              mt={{ base: "25px", sm: "5" }}
            >
              <Character
                key={character.id + 1}
                character={character}
                name={character.name}
                image={character.image}
                origin={character.origin.name}
                location={character.location.name}
                status={character.status}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default CharacterList;
