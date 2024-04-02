import React from "react";
import Head from "next/head";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Main = ({ children, router }) => {
  return (
    // Es feo usar vh, pero con 100% o full no funciona
    <Flex as="main" overflow="hidden" direction="column" minH="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Juan Pablo Oriana" />
        <title>HackIT-BA! by Computer Society ITBA</title>
        <meta name="title" content="HackIT-BA! by Computer Society ITBA" />
        <meta
          name="description"
          content="HackIT-BA es una hackathon de 36hs desde el 31 de marzo al 2 de abril, enmarcada en 2 categorías principales: Economia y Desentralización y Automatización Inteligente."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hackitba.vercel.app" />
        <meta
          property="og:title"
          content="HackIT-BA! by Computer Society ITBA"
        />
        <meta
          property="og:description"
          content="HackIT-BA es una hackathon de 36hs desde el 31 de marzo al 2 de abril, enmarcada en 2 categorías principales: Economia y Desentralización y Automatización Inteligente."
        />
        <meta
          property="og:image"
          content="https://hackitba.vercel.app/images/flyer.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://hackitba.vercel.app/images/flyer.jpg"
        />
        <meta
          property="twitter:title"
          content="HackIT-BA! by Computer Society ITBA"
        />
        <meta
          property="twitter:description"
          content="HackIT-BA es una hackathon de 36hs desde el 31 de marzo al 2 de abril, enmarcada en 2 categorías principales: Economia y Desentralización y Automatización Inteligente."
        />
        <meta
          property="twitter:image"
          content="https://hackitba.vercel.app/images/flyer.jpg"
        />
      </Head>
      <Navbar />
      <Container maxW="full" paddingX={0} pt={16}>
        {children}
      </Container>
      <Spacer />
      {/* Por que no funciona el spacer!!! */}
      <Footer />
    </Flex>
  );
};

export default Main;
