import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(7, 7, 16, 0.72);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 12px;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
    </Overlay>
  );
}
