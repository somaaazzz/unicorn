import { Text } from "@chakra-ui/react";
import Link from "next/link";

const NavItem = ({ text, link }) => {
  return (
    <Link href={link}>
      <Text color="white" fontSize="20px" fontWeight="400">
        {text}
      </Text>
    </Link>
  );
};

export default NavItem;
