import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function HeroBackground() {
  return (
    <ImageContainer>
      <Image src='/images/connect.png' alt='Description of the logo' />
    </ImageContainer>
  );
}
