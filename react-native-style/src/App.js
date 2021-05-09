// 4.2.1. flex와 범위
import React from 'react';
import { View } from 'react-native';
import { viewStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import ShadowBox from './components/ShadowBox';
import Button from './components/Button';
import styled from 'styled-components/native';
import Input from './components/Input';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      {/* <Header />
      <Contents />
      <Footer /> */}
      {/* <ShadowBox /> */}
      <Button title="Hanbit" />
      <Button title="React Native" />
      <Input />
    </Container>
  );
};

export default App;
