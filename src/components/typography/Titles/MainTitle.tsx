import styled from 'styled-components';
import React from 'react';

interface TitleProps {
  fontSize?: string;
  fontWeight?: string;
  $userSelect?: string;
  lineHeight?: string;
  width?: string;
  color?: string;
  fontFamily?: string;
  $paddingBottom?: string;
  $marginBottom?: string;
  $tabletFontSize?: string;
  $mobileFontSize?: string;
  $tabletWidth?: string;
  $mobileWidth?: string;
  $textAlign?: string;
  children: React.ReactNode;
}

const Title = styled.h1<TitleProps>`
  font-size: ${(props) => props.fontSize || '64px'};
  font-weight: ${(props) => props.fontWeight || '600'};
  line-height: ${(props) => props.lineHeight || '1.2'};
  color: ${(props) => props.color || '#fff'};
  font-family: ${(props) => props.fontFamily || "'Reyhan', sans-serif"};
  margin-bottom: ${(props) => props.$marginBottom || '0'};
  padding-bottom: ${(props) => props.$paddingBottom || '0'};
  width: ${(props) => props.width || '100%'};
  user-select: ${(props) => props.$userSelect || 'auto'};
  text-align: ${(props) => props.$textAlign || 'left'};

  @media (max-width: 1024px) {
    font-size: ${(props) => props.$tabletFontSize || props.fontSize || '30px'};
    width: ${(props) => props.$tabletWidth || props.width || '80%'};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.$mobileFontSize || props.fontSize || '30px'};
    width: ${(props) => props.$mobileWidth || props.width || '80%'};
  }
`;

const CustomTitle = React.forwardRef<HTMLHeadingElement, TitleProps>(function CustomTitle(
  {
    fontSize,
    fontWeight,
    lineHeight,
    color,
    fontFamily,
    $marginBottom,
    $paddingBottom,
    $tabletFontSize,
    $mobileFontSize,
    $tabletWidth,
    $mobileWidth,
    $userSelect,
    $textAlign,
    width,
    children,
  }: TitleProps,
  ref
) {
  return (
    <Title
      ref={ref} // **Pass ref to the styled component**
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      width={width}
      fontFamily={fontFamily}
      $paddingBottom={$paddingBottom}
      $marginBottom={$marginBottom}
      $tabletFontSize={$tabletFontSize}
      $mobileFontSize={$mobileFontSize}
      $textAlign={$textAlign}
      $tabletWidth={$tabletWidth}
      $mobileWidth={$mobileWidth}
      $userSelect={$userSelect}>
      {children}
    </Title>
  );
});

export default CustomTitle;
