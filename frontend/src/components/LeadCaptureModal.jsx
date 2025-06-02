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
  FormErrorMessage,
  useDisclosure,
  useToast,
  Stack,
  Text
} from '@chakra-ui/react';

export default function LeadCaptureModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [role, setRole] = useState('');
  const [interest, setInterest] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [feedbackNeeds, setFeedbackNeeds] = useState('');
  const [touched, setTouched] = useState(false);

  const isEmailValid = email.includes('@');

  const handleSubmit = () => {
    setTouched(true);
    if (!isEmailValid || !name || !role || !interest) return;

    console.log({
      name,
      email,
      org,
      role,
      interest,
      projectDesc,
      feedbackNeeds
    });

    toast({
      title: 'Thanks for joining the waitlist!',
      description: "We're reviewing submissions and will follow up with access details.",
      status: 'success',
      duration: 6000,
      isClosable: true,
    });

    onClose();
    setName('');
    setEmail('');
    setOrg('');
    setRole('');
    setInterest('');
    setProjectDesc('');
    setFeedbackNeeds('');
    setTouched(false);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg="#6C4DFF"
        color="white"
        _hover={{ bg: '#5939e6' }}
        px={6}
        py={2}
        rounded="2xl"
        fontWeight="medium"
      >
        Join Waitlist
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent maxW="2xl" p={4}>
          <ModalHeader fontWeight="semibold" fontSize="xl">
            Welcome to Synthetic Ascension
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="sm" color="gray.600" mb={6}>
              We’re building a research-grade platform for generating, evaluating, and explaining synthetic EHR data.
              This form helps us understand who you are and how we can support you—especially if you're an early-stage founder or solo researcher.
            </Text>

            <Stack spacing={4}>
              <FormControl isRequired isInvalid={!name && touched}>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="Jane Doe" value={name} onChange={(e) => setName(e.target.value)} />
                <FormErrorMessage>Name is required.</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!isEmailValid && touched}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="you@project.org" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormErrorMessage>Valid email required.</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Organization (Optional)</FormLabel>
                <Input placeholder="Hospital, lab, startup, university, etc." value={org} onChange={(e) => setOrg(e.target.value)} />
              </FormControl>

              <FormControl isRequired isInvalid={!role && touched}>
                <FormLabel>Your Role</FormLabel>
                <Input placeholder="Researcher, founder, student, etc." value={role} onChange={(e) => setRole(e.target.value)} />
                <FormErrorMessage>Role is required.</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!interest && touched}>
                <FormLabel>Main Area of Interest</FormLabel>
                <Input
                  placeholder="e.g., Rare disease modeling, LLM evaluation, clinical QA, FDA prep"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
                <FormErrorMessage>This field is required.</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>What are you working on?</FormLabel>
                <Textarea
                  placeholder="If you're building something or exploring a dataset, tell us a bit about it."
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>How could we help most right now?</FormLabel>
                <Textarea
                  placeholder="Access to datasets? Evaluations? Feedback? A sounding board for your idea?"
                  value={feedbackNeeds}
                  onChange={(e) => setFeedbackNeeds(e.target.value)}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter gap={3}>
            <Button onClick={onClose} variant="ghost">Cancel</Button>
            <Button
              onClick={handleSubmit}
              bg="#6C4DFF"
              color="white"
              _hover={{ bg: '#5939e6' }}
              rounded="xl"
              px={6}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
