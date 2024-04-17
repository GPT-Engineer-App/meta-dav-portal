import { Box, Flex, Text, Button, Image, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex bg="blue.600" color="white" minHeight="70vh" direction="column" justifyContent="center" alignItems="center" p={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXNpZ25lcnxlbnwwfHx8fDE3MTMzMjA5MTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="MetaDav Logo" mb={4} />
        <Text fontSize="5xl" fontWeight="bold">
          MetaDav
        </Text>
        <Text fontSize="2xl" mt={2}>
          Innovating Your Digital World
        </Text>
        <Button mt={4} colorScheme="orange" size="lg">
          Get Started
        </Button>
      </Flex>

      {/* Services Section */}
      <VStack spacing={8} p={10} alignItems="flex-start">
        <Text fontSize="4xl" fontWeight="bold">
          Our Services
        </Text>
        <HStack spacing={10}>
          <VStack alignItems="flex-start">
            <Text fontSize="2xl" fontWeight="bold">
              Web Design
            </Text>
            <Text fontSize="md">Creating stunning and responsive websites tailored to your needs.</Text>
          </VStack>
          <VStack alignItems="flex-start">
            <Text fontSize="2xl" fontWeight="bold">
              App Development
            </Text>
            <Text fontSize="md">Developing high-quality custom applications for all platforms.</Text>
          </VStack>
          <VStack alignItems="flex-start">
            <Text fontSize="2xl" fontWeight="bold">
              Digital Marketing
            </Text>
            <Text fontSize="md">Boosting your brand's online presence through targeted marketing strategies.</Text>
          </VStack>
        </HStack>
      </VStack>

      {/* Contact Section */}
      <Flex bg="gray.100" p={10} justifyContent="space-between" alignItems="center" direction={{ base: "column", md: "row" }}>
        <VStack spacing={3} alignItems="flex-start">
          <Text fontSize="3xl" fontWeight="bold">
            Contact Us
          </Text>
          <HStack>
            <Icon as={FaMapMarkerAlt} w={5} h={5} />
            <Text>1234 Street, City, Country</Text>
          </HStack>
          <HStack>
            <Icon as={FaPhone} w={5} h={5} />
            <Text>+123 456 7890</Text>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} w={5} h={5} />
            <Text>info@metadav.com</Text>
          </HStack>
        </VStack>
        <HStack spacing={5} mt={{ base: 4, md: 0 }}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} w={8} h={8} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} w={8} h={8} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} w={8} h={8} />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;
