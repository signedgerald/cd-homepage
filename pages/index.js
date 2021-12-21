import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return(
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a back-end developer based in Melbourne, Australia
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
      <Heading as="h2" variant="page-title">
        Gerald Lim
      </Heading>
      <p>Software Engineer (Back-end Developer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page;