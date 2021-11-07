import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
  mode,
}: {
  children: ReactNode;
  label: string;
  href: string;
  mode: any,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  const mode: any = useColorMode()
  return (
    <Box
      bg={useColorModeValue('pink.300', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'column' }}
          spacing={4}
          justify={{ md: 'center' }}
          align={{ md: 'center' }}>
          <Text color={mode === 'dark' ? 'pink.300' : 'white'} textAlign='center' alignSelf='center'>© 2021 Miracle Baby & Kids Spa</Text>
          <Stack justifyContent='center' alignItems='center' direction={'row'} spacing={6}>
            <SocialButton mode={mode} label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton mode={mode} label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}