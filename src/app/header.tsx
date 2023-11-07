import {
  Button,
  Flex,
  Link,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      backgroundColor="teal.1000"
      borderBottomWidth="0px"
      borderColor="blue.600"
      minW="100%"
      h="50px"
      minHeight="50px"
      boxShadow="lg"
      position="sticky"
      alignItems="center"
      zIndex="1"
    >
      <Link href="/home">
        <Button variant="unstyled" marginLeft="20px">
          <Text fontWeight="bold">Home</Text>
        </Button>
      </Link>
      <Spacer />
      <Button variant="unstyled" marginRight="20px" onClick={toggleColorMode}>
        <Text fontWeight="bold">
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Text>
      </Button>
    </Flex>
  );
};

export default Header;
