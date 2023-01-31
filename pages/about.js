import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { Flex, Box } from "@chakra-ui/react";
import AboutUs from "../components/AboutUs";
import FollowUs from "../components/FollowUs";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Flex>
        <Box bg="#FF79B9" w="50vw" minH="calc(100vh - 72px)" p="0">
          <AboutUs></AboutUs>
        </Box>
        <Box bg="white" w="50vw" minH="calc(100vh - 72px)" p="0">
          <FollowUs></FollowUs>
        </Box>
      </Flex>
    </>
  );
}
