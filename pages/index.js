import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { Flex, Image, Button, Text } from "@chakra-ui/react";
import HomeContent from "../components/HomeContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unicorn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Image
        src="background.png"
        alt="Unicorn Image"
        minW="100vw"
        objectFit="cover"
        h="calc(100vh - 72px)"
      ></Image>
      <HomeContent></HomeContent>
    </>
  );
}
