'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Image from 'next/image';
import Modal from '../../components/modals/Modal';
import WaitlistForm from '../../components/inputs/WaitlistForm';

const ParentContainer = styled.div`
  display: flex;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  flex-direction: row;
  width: webkit-fill-available;
`;

const Logo = styled.img`
  width: 160px;
  height: 30px;
`;

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <ParentContainer>
        <Logo src='/images/logo.svg' alt='logo' />
        <PrimaryButton onClick={handleOpenModal}>
          Get Started
          <Image src='/images/arrowDown.svg' alt='arrow down' width={20} height={20} />
        </PrimaryButton>
      </ParentContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <WaitlistForm />
      </Modal>
    </>
  );
}
