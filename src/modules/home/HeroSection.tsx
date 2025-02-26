import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import MainTitle from '../../components/typography/Titles/MainTitle';
import MainParagraph from '../../components/typography/Paragraphes/MainParagraph';
import Image from 'next/image';
import HeadingCard from '../../components/cards/HeadingCard';
import Header from './Header';
import HeroBackground from './HeroBackground';
import Modal from '../../components/modals/Modal';
import WaitlistForm from '../../components/inputs/WaitlistForm';

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
  padding: 56px 0;
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

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 72px;
`;

const TitleContainer = styled.div`
  width: 56%;
`;

const ParagraphContainer = styled.div`
  width: 44%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: start;
  align-items: start;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  overflow: hidden;
`;

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Content>
        <Header />
        <ParentContainer>
          <Parent>
            <ContentContainer>
              <TitleContainer>
                <MainTitle>Redefining the Copy Trading Ecosystem</MainTitle>
              </TitleContainer>
              <ParagraphContainer>
                <MainParagraph>
                  Get early access to a next-generation copy trading platform designed for
                  fund managers and traders who demand precision and performance.
                </MainParagraph>
                <PrimaryButton onClick={handleOpenModal}>
                  Join the Waitlist
                  <Image
                    src='/images/arrowDown.svg'
                    alt='arrow down'
                    width={20}
                    height={20}
                  />
                </PrimaryButton>
              </ParagraphContainer>
            </ContentContainer>
            <CardsContainer>
              <HeadingCard
                imageSrc='/images/img.svg'
                imageAlt='Sample image'
                title='Fund Managers'
                description='Optimise portfolio performance with precise trade replication and seamless execution across multiple accounts, ensuring efficiency and risk control at scale.'
                $imageWidth={322}
                $imageHeight={260}
                $rightBorderWidth='1px'
                $borderPosition='right'
                $borderColor='rgba(255, 255, 255, 0.16)'
                $useFill={false} // or omit since false is default
              />
              <HeadingCard
                imageSrc='/images/img.svg'
                imageAlt='Sample image'
                title='Prop Trading Firms'
                description='Leverage cutting-edge copy trading technology to enhance execution speed, automate strategies, and maintain full control over risk exposure and capital allocation.'
                $imageWidth={322}
                $imageHeight={260}
                $useFill={false} // or omit since false is default
              />
              <HeadingCard
                imageSrc='/images/img.svg'
                imageAlt='Sample image'
                title='Institutional Investors'
                description='Access a sophisticated copy trading infrastructure designed for high-volume trading, secure asset management, and strategic diversification in global markets.'
                $imageWidth={322}
                $imageHeight={260}
                $borderPosition='left'
                $borderColor='rgba(255, 255, 255, 0.16)'
                $leftBorderWidth='1px'
                $useFill={false} // or omit since false is default
              />
            </CardsContainer>
          </Parent>
        </ParentContainer>
      </Content>
      <HeroBackground />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <WaitlistForm />
      </Modal>
    </Container>
  );
}
