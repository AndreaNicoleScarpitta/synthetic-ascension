import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

export default function LeadCaptureModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    organization: '',
    motivation: '',
    useCases: '',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const scriptURL =
  'https://script.google.com/macros/s/AKfycbyhGqZRvB4_2KhF-1mRplFf5hLpJIzeTvFX0M1bjDblRTNJEj7EXN2TztK_452tRClC/exec';

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, value));

      const res = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: form,
      });

      toast({
        title: 'Submission successful!',
        description: "You're officially on the waitlist.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setFormData({
        fullName: '',
        email: '',
        role: '',
        organization: '',
        motivation: '',
        useCases: '',
        notes: '',
      });

      onClose();
    } catch (err) {
      toast({
        title: 'Submission failed.',
        description: 'Something went wrong. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button
        colorScheme="purple"
        bg="#6B46C1"
        _hover={{ bg: '#553C9A' }}
        onClick={onOpen}
      >
        Join Waitlist
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join the Synthetic Ascension Waitlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired mb={3}>
              <FormLabel>Full Name</FormLabel>
              <Input
                name="fullName"
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired mb={3}>
              <FormLabel>Email Address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Your Role</FormLabel>
              <Input
                name="role"
                placeholder="Clinical Researcher, CTO, Data Scientist..."
                value={formData.role}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Organization</FormLabel>
              <Input
                name="organization"
                placeholder="Company, Institution, or Team"
                value={formData.organization}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Why are you interested in Synthetic Ascension?</FormLabel>
              <Textarea
                name="motivation"
                placeholder="Help us understand what brought you here..."
                value={formData.motivation}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>What use cases are you exploring?</FormLabel>
              <Textarea
                name="useCases"
                placeholder="e.g. Rare disease simulation, FDA QA pipelines, Data augmentation"
                value={formData.useCases}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Additional Notes (Optional)</FormLabel>
              <Textarea
                name="notes"
                placeholder="Anything else you'd like us to know?"
                value={formData.notes}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} variant="ghost">
              Cancel
            </Button>
            <Button
              colorScheme="purple"
              bg="#6B46C1"
              _hover={{ bg: '#553C9A' }}
              onClick={handleSubmit}
              isLoading={submitting}
              loadingText="Submitting"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
