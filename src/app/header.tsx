import {
  Button,
  Flex,
  Link,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      backgroundColor={mode("teal.100", "gray.900")}
      boxShadow="lg"
      position="sticky"
      alignItems="center"
      minW="100%"
      h="50px"
      minH="50px"
      zIndex="1"
    >
      <Link href="/home">
        <Button variant="linkHeader" size="lg">
          <Text>Home</Text>
        </Button>
      </Link>
      <Spacer />
      <Button variant="linkHeader" size="lg" onClick={toggleColorMode}>
        <Text>Toggle {colorMode === "light" ? "Dark" : "Light"}</Text>
      </Button>
    </Flex>
  );
};

export default Header;
