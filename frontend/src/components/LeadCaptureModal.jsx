// LeadCaptureModal.jsx
import React, { useState } from "react";
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
  useDisclosure,
  useToast,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";

export default function LeadCaptureModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // ← Change this to the relative path so Vite forwards it to your Apps Script
  const scriptURL = "/api/submit";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    organization: "",
    interest: "",
    useCases: "",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Full Name and Email Address are required",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          role: formData.role,
          organization: formData.organization,
          motivation: formData.interest,
          useCases: formData.useCases,
          notes: formData.notes,
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === "SUCCESS") {
        toast({
          title: "Submission successful!",
          description: "Thank you. Your information has been recorded.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setFormData({
          fullName: "",
          email: "",
          role: "",
          organization: "",
          interest: "",
          useCases: "",
          notes: "",
        });
        onClose();
      } else {
        throw new Error(result.error || "Unknown error from script");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg="#805AD5"
        color="white"
        _hover={{ bg: "#6B46C1" }}
        _active={{ bg: "#553C9A" }}
        size="lg"
        fontWeight="medium"
        borderRadius="md"
      >
        Join Waitlist
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent bg="white" borderRadius="md" boxShadow="lg">
          <ModalHeader fontSize="2xl" fontWeight="bold">
            Join the Synthetic Ascension Waitlist
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel fontSize="md" fontWeight="medium">
                  Full Name <Text as="span" color="red.500">*</Text>
                </FormLabel>
                <Input
                  name="fullName"
                  placeholder="Jane Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  bg="gray.50"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="md" fontWeight="medium">
                  Email Address <Text as="span" color="red.500">*</Text>
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  bg="gray.50"
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="md" fontWeight="medium">
                  Your Role
                </FormLabel>
                <Input
                  name="role"
                  placeholder="Clinical Researcher, CTO, Data Scientist..."
                  value={formData.role}
                  onChange={handleChange}
                  bg="gray.50"
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="md" fontWeight="medium">
                  Organization
                </FormLabel>
                <Input
                  name="organization"
                  placeholder="Company, Institution, or Team"
                  value={formData.organization}
                  onChange={handleChange}
                  bg="gray.50"
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="md" fontWeight="medium">
                  Why are you interested in Synthetic Ascension?
                </FormLabel>
                <Textarea
                  name="interest"
                  placeholder="Help us understand what brought you here..."
                  value={formData.interest}
                  onChange={handleChange}
                  bg="gray.50"
                  resize="none"
                  minH="100px"
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="md" fontWeight="medium">
                  What use cases are you exploring?
                </FormLabel>
                <Textarea
                  name="useCases"
                  placeholder="e.g. Rare disease simulation, FDA QA pipelines, Data augmentation"
                  value={formData.useCases}
                  onChange={handleChange}
                  bg="gray.50"
                  resize="none"
                  minH="100px"
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="md" fontWeight="medium">
                  Additional Notes{" "}
                  <Text as="span" color="gray.500" fontWeight="normal">
                    (Optional)
                  </Text>
                </FormLabel>
                <Textarea
                  name="notes"
                  placeholder="Anything else you'd like us to know?"
                  value={formData.notes}
                  onChange={handleChange}
                  bg="gray.50"
                  resize="none"
                  minH="100px"
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={3}>
              <Button
                onClick={onClose}
                variant="ghost"
                color="gray.700"
                _hover={{ bg: "gray.100" }}
                isDisabled={submitting}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                bg="#805AD5"
                color="white"
                _hover={{ bg: "#6B46C1" }}
                _active={{ bg: "#553C9A" }}
                isLoading={submitting}
                loadingText="Submitting..."
              >
                Submit
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
