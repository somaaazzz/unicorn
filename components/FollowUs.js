import { Text, Flex, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import Sns from "./Sns";

const FollowUs = () => {
  const [likes, setLikes] = useState(0);
  const incrementLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Flex direction="column" align="center">
      <Text color="#FF79B9" fontSize="4vw" fontWeight="700" my="20px">
        Follow Us
      </Text>
      <Flex wrap="wrap" justify="center" gap="2">
        <Sns src="insta.png" link="#"></Sns>
        <Sns src="facebook.png" link="#"></Sns>
        <Sns src="snapchat.png" link="#"></Sns>
        <Sns src="linkedin.png" link="#"></Sns>
        <Sns src="reddit.png" link="#"></Sns>
        <Sns src="twitter.png" link="#"></Sns>
        <Sns src="github.png" link="#"></Sns>
        <Sns src="discord.png" link="#"></Sns>
      </Flex>
      <Box height="20vh" />
      <Text
        color="black"
        fontSize="3vw"
        fontWeight="700"
        textAlign="center"
        mx="50px"
      >
        Give Us Feedback
      </Text>
      <Flex mx="50px" gap="1vw" align="center">
        <Button
          bg="#FF79B9"
          borderRadius="15px"
          pr="60px"
          pl="60px"
          pt="15px"
          pb="15px"
          onClick={incrementLike}
          _hover={{ backgroundColor: "#FF99D0" }}
        >
          <Text
            fontSize="20px"
            font-weight="600"
            textAlign="center"
            color="white"
          >
            +1
          </Text>
        </Button>
        <Text
          color="#FF79B9"
          fontSize="3vw"
          fontWeight="600"
          textAlign="center"
        >
          score:{likes}
        </Text>
      </Flex>
    </Flex>
  );
};

export default FollowUs;
