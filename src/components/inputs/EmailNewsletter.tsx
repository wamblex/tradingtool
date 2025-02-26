'use client';

import React, { useState } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import styled from 'styled-components';
import Image from 'next/image';
import Modal from '../modals/Modal';
import WaitlistForm from './WaitlistForm';

const Container = styled.div`
  height: auto;
  position: relative;
`;

const Content = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: row;
  border-radius: 48px;
  padding: 10px 10px 10px 32px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(251, 249, 247, 0.08);
`;

const Input = styled.input`
  display: flex;
  width: 272px;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  outline: none;
  border: none;
  color: rgba(255, 255, 255);
  font-family: Reyhan;
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: rgba(255, 255, 255, 0.72);
  }
`;

export default function EmailNewsletter() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Content as="form" onSubmit={handleOpenModal}>
        <Input 
          type="email"
          placeholder='Insert your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PrimaryButton type="submit">
          Subscribe
          <Image src='/images/arrowDown.svg' alt='arrow down' width={20} height={20} />
        </PrimaryButton>
      </Content>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <WaitlistForm initialEmail={email} />
      </Modal>
    </Container>
  );
}
