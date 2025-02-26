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

const SuccessMessage = styled.div`
  color: #4bb543;
  text-align: center;
  margin-top: 16px;
`;

const ErrorMessage = styled.div`
  color: #ff3333;
  text-align: center;
  margin-top: 16px;
`;

interface WaitlistFormProps {
  initialEmail?: string;
  onSuccess?: () => void;
}

export default function WaitlistForm({
  initialEmail = '',
  onSuccess,
}: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: initialEmail,
    phone: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setStatus('success');
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to join waitlist');
    }
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
            required
          />
          <Input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </InputRow>

        <Input
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          type='tel'
          name='phone'
          placeholder='Phone number'
          value={formData.phone}
          onChange={handleChange}
        />
      </InputsContainer>

      <PrimaryButton
        fontSize='16px'
        $padding='16px 24px'
        type='submit'
        disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
        {status !== 'loading' && (
          <Image src='/images/arrowDown.svg' alt='arrow down' width={20} height={20} />
        )}
      </PrimaryButton>

      {status === 'success' && (
        <SuccessMessage>
          Successfully joined the waitlist! We willl be in touch soon.
        </SuccessMessage>
      )}

      {status === 'error' && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
