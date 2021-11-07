import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
import BabyIcon from './Icons/BabyIcon';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Baby & Kids Spa
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Baby & Kid SPA merupakan treatment bagi bayi <Text as="span" color={"pink.400"}>Baru Lahir</Text> hingga <Text as="span" color={"pink.400"}>10 Tahun</Text>, 
          untuk menstimulasi motorik  kasar, 
          relaksasi, meningkatkan  metabolisme tubuh, 
          dan menambah kepercayaan diri untuk mencapai tumbuh kembang yang optimal bagi si buah hati
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'pink.400'}
            _hover={{ bg: 'gray.500' }}>
            Contact Us
          </Button>
          <Button rounded={'full'} px={6}>
            Pricing
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Illustration
            height={{ sm: '35rem', md: '35rem', lg: '40rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export const Illustration = (props: IconProps) => {
  return (
    <Icon
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <BabyIcon />
    </Icon>
  );
};

