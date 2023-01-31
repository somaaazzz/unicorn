import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Box w="29px" h="40px">
      <Link href="./">
        <Image src="./logo.png" alt="logo"></Image>
      </Link>
    </Box>
  );
};

export default Logo;
