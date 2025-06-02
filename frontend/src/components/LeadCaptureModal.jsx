// C:\Users\andys\Documents\SyntheticAscension\SyntheticAscensionClean\frontend\src\components\LeadCaptureModal.jsx

import React, { useState, useEffect } from "react";
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

  // Local form state for filling inputs + honeypot
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    organization: "",
    interest: "",
    useCases: "",
    notes: "",
    "bot-field": "",
  });

  // After a successful Netlify form submission, Netlify will redirect to “?success=true”,
  // so we listen for that and show a toast.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      toast({
        title: "Submission successful!",
        description: "Thank you. Your information has been recorded.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      // Remove the query param so it doesn’t re-trigger on page reload
      params.delete("success");
      const newUrl =
        window.location.origin + window.location.pathname + params.toString();
      window.history.replaceState({}, "", newUrl);
    }
  }, [toast]);

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

          {/*
            Netlify Forms requires:
            • name="lead-capture"          → unique form identifier
            • method="POST"               → form uses POST
            • data-netlify="true"         → Netlify scans this form
            • netlify-honeypot="bot-field"→ hidden honeypot for spam
            • action="?success=true"      → redirect with ?success=true on success
          */}
          <form
            name="lead-capture"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="?success=true"
          >
            {/* 
              REQUIRED hidden fields for Netlify Forms.
              • form-name must match name="lead-capture"
            */}
            <input type="hidden" name="form-name" value="lead-capture" />
            <div style={{ display: "none" }}>
              <label>
                Don’t fill this out if you’re human:{" "}
                <input
                  name="bot-field"
                  value={formData["bot-field"]}
                  onChange={handleChange}
                />
              </label>
            </div>

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
                >
                  Cancel
                </Button>
                {/* Change to type="submit" so the browser POSTS to Netlify */}
                <Button
                  type="submit"
                  bg="#805AD5"
                  color="white"
                  _hover={{ bg: "#6B46C1" }}
                  _active={{ bg: "#553C9A" }}
                >
                  Submit
                </Button>
              </HStack>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
