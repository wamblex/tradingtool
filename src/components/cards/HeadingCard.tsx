import React from 'react';
import styled from 'styled-components';
import MainTitle from '../typography/Titles/MainTitle';
import MainParagraph from '../typography/Paragraphes/MainParagraph';
import Image from 'next/image';

// Update MainContainer to support separate left and right border widths
const MainContainer = styled.div<{
  $borderPosition?: 'left' | 'right' | null;
  $leftBorderWidth?: string;
  $rightBorderWidth?: string;
  $borderColor?: string;
}>`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: rgba(251, 249, 247, 0.08);
  backdrop-filter: blur(138px);
  gap: 32px;
  ${({ $borderPosition, $leftBorderWidth, $rightBorderWidth, $borderColor }) => {
    if ($borderPosition === 'left') {
      return `
        border-left: ${$leftBorderWidth || '1px'} solid ${$borderColor || '#ccc'};
      `;
    } else if ($borderPosition === 'right') {
      return `
        border-right: ${$rightBorderWidth || '1px'} solid ${$borderColor || '#ccc'};
      `;
    }
    return ''; // No border if $borderPosition is null or undefined
  }}
`;

const ImageContainer = styled.div`
  position: relative; // Required for fill to work
  width: 100%;
  height: 300px; // Default height, can be overridden with prop
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

interface HeadingCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  $padding?: string;
  $gap?: string;
  $borderPosition?: 'left' | 'right' | null; // Prop to specify border position
  $borderColor?: string;
  $leftBorderWidth?: string; // New prop for left border width
  $rightBorderWidth?: string; // New prop for right border width
  $imageHeight?: number; // Prop for image height
  $imageWidth?: number; // Prop for image width (optional if using fill)
  $useFill?: boolean; // Prop to toggle between fill and fixed dimensions
}

export default function HeadingCard({
  imageSrc,
  imageAlt,
  title,
  description,
  $padding = '40px',
  $gap = '32px',
  $borderPosition = null, // Default to no border
  $borderColor,
  $leftBorderWidth, // Default to undefined (will fall back to '1px' in styled component)
  $rightBorderWidth, // Default to undefined (will fall back to '1px' in styled component)
  $imageHeight = 300, // Default height
  $imageWidth = 400, // Default width
  $useFill = false, // Default to fixed dimensions
}: HeadingCardProps) {
  return (
    <MainContainer
      style={{ padding: $padding, gap: $gap }}
      $borderPosition={$borderPosition}
      $leftBorderWidth={$leftBorderWidth}
      $rightBorderWidth={$rightBorderWidth}
      $borderColor={$borderColor}>
      <ImageContainer style={{ height: $useFill ? `${$imageHeight}px` : 'auto' }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          {...($useFill ? { fill: true } : { width: $imageWidth, height: $imageHeight })}
        />
      </ImageContainer>
      <ContentContainer>
        <MainTitle fontSize='32px' fontWeight='600'>
          {title}
        </MainTitle>
        <MainParagraph fontSize='16px' color='rgba(251, 249, 247, 0.72)'>
          {description}
        </MainParagraph>
      </ContentContainer>
    </MainContainer>
  );
}
