import { Text } from "@chakra-ui/react";
import Link from "next/link";

const NavItem = ({ text, link }) => {
  return (
    <Link href={link}>
      <Text
        color="white"
        fontSize="20px"
        fontWeight="400"
        _hover={{ color: "rgb(200, 200, 200)" }}
      >
        {text}
      </Text>
    </Link>
  );
};

export default NavItem;
