import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MainParagraph from '../../components/typography/Paragraphes/MainParagraph';
import EmailNewsletter from '@/components/inputs/EmailNewsletter';

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
  padding: 0px 0px 40px 0px;
`;

const Parent = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 1204px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 32px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Content>
        <ParentContainer>
          <Parent>
            <TopContainer>
              <MainParagraph fontSize='20px' fontWeight='500' color='#fff'>
                Copyright © 2025 Trading Tool LLC. All rights reserved.
              </MainParagraph>
              <MainParagraph
                fontSize='18px'
                fontWeight='400'
                color='rgba(255, 255, 255, 0.72)'>
                Trading Tool is a next-generation copy trading platform designed for
                institutional investors, hedge funds, and professional traders. Our
                platform enables seamless trade replication across multiple asset classes,
                including Forex, commodities, equities, indices, crypto, and derivatives,
                by integrating with top-tier brokers and exchanges. Experience smart
                automation, real-time performance tracking, and advanced risk
                management—all in one powerful ecosystem.
              </MainParagraph>
            </TopContainer>
            <BottomContainer>
              <Image src='/images/logo.svg' alt='logo' width={160} height={30} />
              <EmailNewsletter />
            </BottomContainer>
          </Parent>
        </ParentContainer>
      </Content>
    </Container>
  );
}
