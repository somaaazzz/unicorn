import { Button, Text, Flex } from "@chakra-ui/react";

const HomeContent = () => {
  return (
    <Flex
      direction="column"
      position="absolute"
      align="flex-end"
      top="30vh"
      right="10vw"
    >
      <Text color="white" fontSize="100px" fontWeight="800" mb="30px" ml="20px">Care & Love?</Text>
      <Button bg="#FF79B9" borderRadius="15px" pr="60px" pl="60px" pt="15px" pb="15px">
        <Text fontSize="16px" font-weight="600" textAlign="center" color="white">
          Adopt
        </Text>
      </Button>
    </Flex>
  );
};

export default HomeContent;
