import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

const Sns = ({ link, src }) => {
  return (
    <Box w={["40%", "40%", "20%"]}>
      <Link href={link}>
        <Image src={src} alt="logo"></Image>
      </Link>
    </Box>
  );
};

export default Sns;
