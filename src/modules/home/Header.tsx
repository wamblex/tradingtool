'use client';

import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Image from 'next/image';

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
  return (
    <ParentContainer>
      <Logo src='/images/logo.svg' alt='logo' />
      <PrimaryButton>
        Get Started
        <Image src='/images/arrowDown.svg' alt='arrow down' width={20} height={20} />
      </PrimaryButton>
    </ParentContainer>
  );
}
