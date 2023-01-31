import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { Flex } from "@chakra-ui/react";

export default function gallery() {
  return (
    <>
      <Head>
        <title>Unicorn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
    </>
  );
}
