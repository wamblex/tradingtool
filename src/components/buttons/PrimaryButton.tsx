'use client';

import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
  color?: string;
  $padding?: string;
  borderRadius?: string;
  border?: string;
  fontSize?: string;
  fontWeight?: string;
  spacingTop?: string;
  hoverBackground?: string;
}

const Container = styled.button<ButtonProps>`
  width: auto;
  height: auto;
  padding: ${(props) => props.$padding || '10px 16px'};
  overflow: hidden;
  position: relative;
  border: ${(props) => props.border || 'none'};
  background: ${(props) => props.background || '#fff'};
  border-radius: ${(props) => props.borderRadius || '100px'};
  color: ${(props) => props.color || '#3d3d3d'};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 1.5s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    background: ${(props) => props.hoverBackground || 'rgba(255, 255, 255, 0.16)'};
    color: #fff;
    backdrop-filter: blur(64px);

    img {
      filter: brightness(0) invert(1);
      transition: filter 1.5s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }

  img {
    transition: filter 1.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}
