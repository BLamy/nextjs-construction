import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #c3333b;
  margin-bottom: 10px;
  text-decoration: underline; /* Added underline */
`;

const Subheading = styled.p`
  font-size: 20px;
  color: #333;
`;

const Logo = styled.img`
  max-width: 500px;
  margin-bottom: 20px;
`;

const UnderConstructionPage = () => (
  <Container>
    <Logo src="/bam_logo.png" alt="BAM Logo" />
    <Heading>BAM is Under Construction</Heading>
    <Subheading>Sorry for the inconvenience!</Subheading>
  </Container>
);

export default UnderConstructionPage;
