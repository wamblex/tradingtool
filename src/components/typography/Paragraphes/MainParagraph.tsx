import styled from 'styled-components';
import React from 'react';

interface ParagraphProps {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  width?: string;
  color?: string;
  fontFamily?: string;
  $tabletFontSize?: string;
  $mobileFontSize?: string;
  $tabletWidth?: string;
  $mobileWidth?: string;
  children: React.ReactNode;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '400'};
  line-height: ${(props) => props.lineHeight || '1.5'};
  width: ${(props) => props.width || '100%'};
  color: ${(props) => props.color || 'rgba(251, 249, 247, 0.72)'};
  font-family: ${(props) => props.fontFamily || "'Reyhan', sans-serif"};
  z-index: 5;

  @media (max-width: 1024px) {
    font-size: ${(props) => props.$tabletFontSize || props.fontSize || '30px'};
    width: ${(props) => props.$tabletWidth || props.width || '100%'};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.$mobileFontSize || props.fontSize || '30px'};
    width: ${(props) => props.$mobileWidth || props.width || '100%'};
  }
`;

const CustomParagraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  function CustomParagraph(
    {
      fontSize,
      fontWeight,
      lineHeight,
      color,
      fontFamily,
      width,
      $mobileFontSize,
      $tabletFontSize,
      $mobileWidth,
      $tabletWidth,
      children,
    }: ParagraphProps,
    ref
  ) {
    return (
      <Paragraph
        ref={ref} // **Pass ref to the styled component**
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        width={width}
        color={color}
        fontFamily={fontFamily}
        $mobileFontSize={$mobileFontSize}
        $tabletFontSize={$tabletFontSize}
        $mobileWidth={$mobileWidth}
        $tabletWidth={$tabletWidth}>
        {children}
      </Paragraph>
    );
  }
);

export default CustomParagraph;
