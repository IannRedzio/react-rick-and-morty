import React from "react";
import { Container, Text, Image } from "@chakra-ui/react";

const Character = (character) => {
  return (
    <Container display="flex" flexDirection="column">
      <Image
        mt="10px"
        objectFit="cover"
        borderRadius="10"
        src={character.image}
        alt={character.name}
      />
      <Text
        as="h2"
        fontSize="xl"
        textAlign="center"
        pt="10px"
        pb="10px"
        color="#81ff64"
      >
        {character.name}
      </Text>
      <Text as="p" color="white">
        <Text as="span" color="yellow">
          Origin:{" "}
        </Text>
        {character.origin}
      </Text>
      <Text as="p" color="white">
        <Text as="span" color="yellow">
          Location:{" "}
        </Text>{" "}
        {character.location}
      </Text>
      <Text as="p" color="white" mb={3}>
        <Text as="span" color="yellow">
          Status:{" "}
        </Text>{" "}
        {character.status}
      </Text>
    </Container>
  );
};

export default Character;
