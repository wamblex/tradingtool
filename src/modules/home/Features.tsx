import React from 'react';
import styled from 'styled-components';
import MainTitle from '../../components/typography/Titles/MainTitle';
import MainParagraph from '../../components/typography/Paragraphes/MainParagraph';
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  z-index: 5;
`;

const ParentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 144px 0;
`;

const Parent = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 1204px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  width: 1204px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const BigCard = styled.div`
  width: calc(64% - 90px);
  height: 345px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(251, 249, 247, 0.08);
  backdrop-filter: blur(138px);
  align-items: flex-start;
  justify-content: flex-end;
`;

const SmallCard = styled.div`
  width: calc(36% - 90px);
  height: 345px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(251, 249, 247, 0.08);
  backdrop-filter: blur(138px);
  align-items: flex-start;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const TitlesContainerBig = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 428px;
`;

const TitlesContainerSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export default function Features() {
  return (
    <Container>
      <Content>
        <ParentContainer>
          <Parent>
            <TitleContainer>
              <MainTitle width='862px' $textAlign='center'>
                Seamless Copy Trading Across Every Market
              </MainTitle>
            </TitleContainer>
            <FeaturesContainer>
              <BigCard>
                <TextContainer>
                  <MainParagraph color='#6B91B3'>Control</MainParagraph>
                  <TitlesContainerBig>
                    <MainTitle fontSize='32px' fontWeight='600'>
                      Smart Copy Trading
                    </MainTitle>
                    <MainParagraph fontSize='18px' fontWeight='400'>
                      Easily mirror the strategies of top-performing traders across
                      multiple asset classes, ensuring optimised portfolio growth with
                      minimal effort.
                    </MainParagraph>
                  </TitlesContainerBig>
                </TextContainer>
              </BigCard>
              <SmallCard>
                <TextContainer>
                  <MainParagraph color='#6B91B3'>Transparency</MainParagraph>
                </TextContainer>
                <TitlesContainerSmall>
                  <MainTitle fontSize='32px' fontWeight='600'>
                    Real-Time Tracking
                  </MainTitle>
                  <MainParagraph fontSize='18px' fontWeight='400'>
                    Get live insights into your copied trades, monitor trader performance,
                    adjust your strategy with full visibility at every step.
                  </MainParagraph>
                </TitlesContainerSmall>
              </SmallCard>
              <SmallCard>
                <TextContainer>
                  <MainParagraph color='#6B91B3'>Security</MainParagraph>
                </TextContainer>
                <TitlesContainerSmall>
                  <MainTitle fontSize='32px' fontWeight='600'>
                    Risk Management Tools
                  </MainTitle>
                  <MainParagraph fontSize='18px' fontWeight='400'>
                    Set custom SL, TP, and exposure limits to safeguard your investments
                    and maintain control over your trading activities.
                  </MainParagraph>
                </TitlesContainerSmall>
              </SmallCard>
              <BigCard>
                <TextContainer>
                  <MainParagraph color='#6B91B3'>Flexibility</MainParagraph>
                </TextContainer>
                <TitlesContainerBig>
                  <MainTitle fontSize='32px' fontWeight='600'>
                    Multi-Asset Integration
                  </MainTitle>
                  <MainParagraph fontSize='18px' fontWeight='400'>
                    Seamlessly connect with brokers supporting Forex, commodities,
                    equities, indices, crypto, and derivatives, all within one unified
                    platform.
                  </MainParagraph>
                </TitlesContainerBig>
              </BigCard>
            </FeaturesContainer>
          </Parent>
        </ParentContainer>
      </Content>
    </Container>
  );
}
