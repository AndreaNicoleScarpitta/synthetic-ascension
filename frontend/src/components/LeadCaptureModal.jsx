import React, { useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, Button, FormControl, FormLabel, Input, Textarea,
  Select, Checkbox, Text, useDisclosure, useToast
} from '@chakra-ui/react';

export default function LeadCaptureModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    industry: '',
    industryOther: '',
    useCase: '',
    useCaseOther: '',
    timeline: '',
    size: '',
    comments: '',
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const isCorporateEmail = (email) => {
    const freeDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const domain = email.split('@')[1];
    return email.includes('@') && !freeDomains.includes(domain);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.company || !formData.industry || !formData.useCase) {
      toast({ title: 'Please fill all required fields.', status: 'error' });
      return;
    }

    if (!isCorporateEmail(formData.email)) {
      toast({ title: 'Use a valid corporate email address.', status: 'error' });
      return;
    }

    setLoading(true);

    const payload = {
      ...formData,
      industry: formData.industry === 'Other' ? formData.industryOther : formData.industry,
      useCase: formData.useCase === 'Other' ? formData.useCaseOther : formData.useCase,
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwZ7AvTrsvpQPb8PMO0TwiucikJ406lzuCuMVonazKBxc22xrv_Ptm_1Ee9jsmdeuLy/exec', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });

      setSubmitted(true);
      toast({ title: 'Request sent!', status: 'success' });
    } catch (err) {
      toast({ title: 'Submission failed. Try again.', status: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <Button
  onClick={onOpen}
  colorScheme="purple"
  size="lg"
  px={8}
  py={6}
  fontWeight="bold"
  borderRadius="md"
>
  Learn More
</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Learn More About Synthetic Ascension
            <Text fontSize="sm" color="gray.500">
              Tell us a little about yourself and your needs. We’ll get back to you with tailored information and next steps.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input name="name" placeholder="e.g. Jane Doe" onChange={handleChange} />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Work Email</FormLabel>
                <Input name="email" type="email" placeholder="e.g. jane@acmepharma.com" onChange={handleChange} />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Company</FormLabel>
                <Input name="company" placeholder="e.g. Acme Pharmaceuticals" onChange={handleChange} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Job Title</FormLabel>
                <Input name="jobTitle" placeholder="e.g. VP of R&D" onChange={handleChange} />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Industry Vertical</FormLabel>
                <Select name="industry" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Pharma & Biotech</option>
                  <option>Hospitals / ACOs</option>
                  <option>Payers / Insurers</option>
                  <option>Regulators</option>
                  <option>Other</option>
                </Select>
              </FormControl>
              {formData.industry === 'Other' && (
                <Input mt={2} name="industryOther" placeholder="Enter industry..." onChange={handleChange} />
              )}

              <FormControl isRequired mt={4}>
                <FormLabel>Primary Use Case</FormLabel>
                <Select name="useCase" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Synthetic data for model training</option>
                  <option>Clinical trial simulation</option>
                  <option>Regulatory readiness & testing</option>
                  <option>Data privacy & compliance</option>
                  <option>Other</option>
                </Select>
              </FormControl>
              {formData.useCase === 'Other' && (
                <Input mt={2} name="useCaseOther" placeholder="Enter use case..." onChange={handleChange} />
              )}

              <FormControl mt={4}>
                <FormLabel>Timeline for Evaluation</FormLabel>
                <Select name="timeline" onChange={handleChange}>
                  <option>Just exploring</option>
                  <option>0–3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Company Size</FormLabel>
                <Select name="size" onChange={handleChange}>
                  <option>1–50 employees</option>
                  <option>51–200</option>
                  <option>201–500</option>
                  <option>501–1,000</option>
                  <option>1,000+</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Additional Comments</FormLabel>
                <Textarea name="comments" placeholder="What challenges are you looking to solve?" onChange={handleChange} />
              </FormControl>

              <Checkbox mt={4} name="consent" onChange={handleChange}>
                I agree to receive product updates and marketing emails.
              </Checkbox>

              <Text fontSize="sm" color="gray.500" mt={2}>
                We respect your privacy and will never share your information. Read our Privacy Policy.
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} mr={3}>Cancel</Button>
              <Button
                colorScheme="purple"
                type="submit"
                isLoading={loading}
                isDisabled={submitted}
              >
                Send My Request
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
