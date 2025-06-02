import React from 'react';
import { Box, Heading, Text, VStack, Icon } from '@chakra-ui/react';

export default function FeatureCard({ icon, title, desc }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" rounded="lg" bg="white">
      <VStack spacing={3} align="start">
        {icon && <Icon as={icon} boxSize={6} />}
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{desc}</Text>
      </VStack>
    </Box>
  );
}
