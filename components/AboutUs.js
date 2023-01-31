import { Text, Flex } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Flex direction="column" align="center">
      <Text color="white" fontSize="4vw" fontWeight="700" my="20px">
        About Us
      </Text>
      <Text
        color="white"
        fontSize="3vw"
        fontWeight="400"
        textAlign="center"
        mx="50px"
      >
        My Little Unicorn is a unicorn adoption agency. Our platform allows you
        to bring a touch of whimsy and wonder into your life by adopting your
        very own unicorn. These mystical creatures come in all shapes and sizes
        and each one is as unique as a fingerprint.
      </Text>
    </Flex>
  );
};

export default AboutUs;
