import React, { useState } from 'react';
import styled from 'styled-components';
import MainTitle from '../typography/Titles/MainTitle';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  padding: 48px 40px;
  flex-direction: column;
  gap: 32px;
  border: 1px solid #3d3d3d;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(138px);
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 16px;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: -webkit-fill-available;
`;

const Input = styled.input`
  width: -webkit-fill-available;
  padding: 16px 24px;
  border-radius: 48px;
  background: rgba(251, 249, 247, 0.08);
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border: none;

  &::placeholder {
    color: rgba(251, 249, 247, 0.48);
  }

  &:focus {
    border-color: #4a90e2;
  }
`;

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Container as='form' onSubmit={handleSubmit}>
      <MainTitle $textAlign='center' fontSize='32px'>
        Join our waitlist for best copy trading experience
      </MainTitle>

      <InputsContainer>
        <InputRow>
          <Input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
          />
        </InputRow>

        <Input
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          type='tel'
          name='phone'
          placeholder='Phone number'
          value={formData.phone}
          onChange={handleChange}
        />
      </InputsContainer>

      <PrimaryButton fontSize='16px' $padding='16px 24px' type='submit'>
        Join the Waitlist
        <Image src='/images/arrowDown.svg' alt='arrow down' width={20} height={20} />
      </PrimaryButton>
    </Container>
  );
}
