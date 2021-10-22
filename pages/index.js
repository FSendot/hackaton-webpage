import React from "react";
import { Heading, Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";
import NoSSR from "../components/NoSSR";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, { forces } from "react-particle-image";
import CustomParticleOptions from "../components/CustomParticleOptions.ts";

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 30);
};
const Home = () => {
  const { innerWidth, innerHeight } = useWindowSize();
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      direction={["row", "column", "row", "row"]}
    >
      <Flex direction="column" zIndex={2}>
        <span>
          <Heading
            as="h1"
            size="4xl"
            color={useColorModeValue("#f0e7db", "#101012")}
            textShadow="-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff"
          >
            HACKATHON
          </Heading>
          <Heading as="h1" size="4xl" color={useColorModeValue("white")}>
            CS
          </Heading>
        </span>
        <Text m="5px 0 0 20px">Este texto no significa nada!</Text>
      </Flex>
      <Box ml={["-30%", 0, "-30%", "-30%"]} mt={[0, "-25%", 0, 0]}>
        <NoSSR>
          <ParticleImage
            src={"/images/cs-logo.png"}
            scale={0.5}
            entropy={40}
            maxParticles={4200}
            width={1000}
            height={600}
            mouseMoveForce={motionForce}
            mouseTouchForce={motionForce}
            particleOptions={CustomParticleOptions}
            backgroundColor={"none"}
          />
        </NoSSR>
      </Box>
    </Flex>
  );
};

export default Home;
