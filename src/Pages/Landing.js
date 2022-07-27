import React, { Component } from 'react';
import { Div, Text, Button, Icon } from 'atomize';

import background from '../Image/bg.png';
import Navbar from '../Components/Navbar.js';

function Landing() {
  return (
    <Div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
      }}
      textColor="dark"
      bgSize={{ xs: '150vh', md: '130vw', lg: '83vw' }}
      bgPos="center"
      h="100%"
      minH="100vh"
    >
      <Navbar />
      <Div
        d="flex"
        flexDir="column"
        p={{ x: '10%' }}
        justify="center"
        h="85%"
        m="0px"
      >
        <Text
          fontFamily="display"
          textSize={{ xs: '48px', md: '72px' }}
          maxW="11em"
        >
          Hi, I'm S <span style={{ color: '#FF6B6C' }}>Alya</span> Mevia! A{' '}
          <span style={{ color: '#FF6B6C' }}>Data Scientist</span> ⁕
        </Text>
        <Text
          textSize={{ sm: '18px', md: '24px' }}
          textWeight="600"
          m={{ y: { xs: '3rem', md: '2rem' } }}
          maxW="35em"
        >
          I am also a traditional media artist, polyglot, and a final year
          Computer Science student in Institut Teknologi Bandung (*^ - ^*)/
        </Text>
        <Div d="flex" flexDir="row">
          <Button
            h="3rem"
            prefix={
              <Icon name="Email" size="16px" color="teal" m={{ r: '0.5rem' }} />
            }
            bg="none"
            border="1px solid"
            borderColor="teal"
            textColor="teal"
            hoverBg="lightteal"
            m={{ r: '0.5rem' }}
          >
            Contact Me
          </Button>
          <Button
            h="3rem"
            prefix={
              <Icon
                name="Folder"
                size="16px"
                color="teal"
                m={{ r: '0.5rem' }}
              />
            }
            bg="none"
            border="1px solid"
            borderColor="teal"
            textColor="teal"
            hoverBg="lightteal"
            m={{ r: '0.5rem' }}
          >
            Resume
          </Button>
        </Div>
      </Div>
    </Div>
  );
}

export default Landing;
