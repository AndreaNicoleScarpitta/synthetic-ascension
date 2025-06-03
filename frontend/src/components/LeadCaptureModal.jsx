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

import { supabase } from '../supabaseClient';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { fullName, email, role, organization, motivation, useCases, notes } = formData;

    const { error } = await supabase.from('leads').insert([
      {
        full_name: fullName,
        email,
        role,
        organization,
        motivation,
        use_cases: useCases,
        notes,
      },
    ]);

    setSubmitting(false);

    if (error) {
      toast({
        title: 'Submission failed.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Success!',
        description: 'We’ve recorded your interest.',
        status: 'success',
        duration: 4000,
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
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Join the Waitlist
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join the Waitlist</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Role</FormLabel>
                <Input
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Organization</FormLabel>
                <Input
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Motivation</FormLabel>
                <Textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Use Cases</FormLabel>
                <Textarea
                  name="useCases"
                  value={formData.useCases}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Additional Notes</FormLabel>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit" isLoading={submitting}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
