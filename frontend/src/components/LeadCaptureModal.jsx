import React, { useState } from 'react';
import {
  Button, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
  Input, useDisclosure
} from '@chakra-ui/react';

export default function LeadCaptureModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');

  return (
    <>
      <Button colorScheme="purple" onClick={onOpen}>Join Waitlist</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join the Synthetic Ascension Waitlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>Cancel</Button>
            <Button colorScheme="blue" onClick={() => {
              console.log(`Captured email: ${email}`);
              onClose();
            }}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
