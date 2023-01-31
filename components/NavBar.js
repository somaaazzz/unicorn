import { Text, Image, Flex, Spacer, Box } from "@chakra-ui/react";
import Link from "next/link";
import NavItem from "./NavItem";
import CompanyName from "./CompanyName";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <Flex
      h="72px"
      bg="black"
      minWidth="max-content"
      pr="40px"
      pl="40px"
      pt="14px"
      pb="14px"
      gap="2%"
    >
      <Logo></Logo>
      <CompanyName text="My Little Unicorn"></CompanyName>
      <Spacer></Spacer>
      <NavItem text="About" link="./about"></NavItem>
      <NavItem text="Gallery" link="./gallery"></NavItem>
    </Flex>
  );
};

export default NavBar;
