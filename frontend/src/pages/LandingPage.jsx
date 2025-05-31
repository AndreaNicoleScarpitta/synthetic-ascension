import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import LeadCaptureModal from '../components/LeadCaptureModal';
import personas from '../config/personas';
import verticals from '../config/verticals';

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

export default function LandingPage() {
  const [persona, setPersona] = useState('builder');
  const { headline, description, features } = personas[persona];

  return (
    <Box bg="gray.50" minH="100vh" py={20}>
      <Container maxW="7xl">
        {/* Hero */}
        <MotionStack
          spacing={6}
          textAlign="center"
          mb={16}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, purple.600, blue.500)"
            bgClip="text"
            fontFamily="syne"
          >
            Synthetic Ascension
          </Heading>
          <Text fontSize="xl" color="gray.700" maxW="3xl" mx="auto">
            The platform for agentic synthetic health data — safe, scalable, and ready for real-world use.
          </Text>

          <HStack spacing={4} justify="center" mt={4}>
            {Object.entries(personas).map(([key, p]) => (
              <Button
                key={key}
                onClick={() => setPersona(key)}
                colorScheme={persona === key ? 'purple' : 'gray'}
                variant={persona === key ? 'solid' : 'outline'}
              >
                {p.label}
              </Button>
            ))}
          </HStack>
        </MotionStack>

        {/* Persona Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Stack spacing={8} mb={16}>
            <Heading size="lg" textAlign="center">
              {headline}
            </Heading>
            <Text textAlign="center" color="gray.600" maxW="3xl" mx="auto">
              {description}
            </Text>
            <Flex gap={10} direction={{ base: 'column', md: 'row' }} justify="center">
              {features.map((f, i) => (
                <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
              ))}
            </Flex>
          </Stack>
        </MotionBox>

        {/* Use Cases */}
        <Stack spacing={6} mb={20}>
          <Heading size="md" textAlign="center">
            Real Use Cases. Real Value.
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {verticals.map((v, i) => (
              <FeatureCard key={i} icon={v.icon} title={v.title} desc={v.desc} />
            ))}
          </SimpleGrid>
        </Stack>

        {/* Impact Section */}
        <MotionBox
          bg="gray.100"
          p={10}
          rounded="lg"
          shadow="base"
          maxW="6xl"
          mx="auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Stack spacing={4} textAlign="center">
            <Heading size="md">Why This Matters</Heading>
            <Text color="gray.700" maxW="4xl" mx="auto">
              The world’s most vulnerable patients are often the least represented in data. We built
              Synthetic Ascension not just for speed or scalability — but to enable safer innovation,
              equitable research, and accessible care. No PHI. No delays. Just progress.
            </Text>
          </Stack>
        </MotionBox>

        {/* Final CTA */}
        <Stack spacing={4} mt={20} textAlign="center">
          <Heading size="md">
            Join the movement.
          </Heading>
          <Text color="gray.600" maxW="2xl" mx="auto">
            Synthetic Ascension is already powering dozens of teams across healthcare, life sciences, and AI.
            Be part of the next wave of safer, smarter clinical innovation.
          </Text>
          <Flex justify="center">
            <LeadCaptureModal />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
