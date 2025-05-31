import { VStack, Icon, Text } from '@chakra-ui/react';

export default function FeatureCard({ icon, title, desc }) {
  return (
    <VStack align="start" spacing={2}>
      <Icon as={icon} boxSize={6} color="purple.500" />
      <Text fontWeight="semibold">{title}</Text>
      <Text color="gray.600">{desc}</Text>
    </VStack>
  );
}
