import { Text } from "@chakra-ui/react";
import Link from "next/link";

const CompanyName = ({ text }) => {
  return (
    <Link href="./">
      <Text color="white" fontSize="22px" fontWeight="600">
        {text}
      </Text>
    </Link>
  );
};

export default CompanyName;
