import React, { Component } from 'react';
import { Div, Text, Button, Icon } from 'atomize';

import Navbar from '../Components/Navbar.js';
import portrait from '../Image/portrait.jpeg';

const Headline = (props) => {
  let text = props.text;
  return (
    <Text
      fontFamily="heading"
      textSize={{ xs: '24px', md: '36x' }}
      textColor="teal"
    >
      {text}
    </Text>
  );
};

function AboutMe() {
  return (
    <>
      <Div textColor="dark" bg="lime" p={{ b: '3em' }}>
        <Navbar />
        <Div d="flex" flexDir="row">
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
              textSize={{ xs: '36px', md: '48px' }}
              maxW="11em"
            >
              ⁕My name is <span style={{ color: '#FF6B6C' }}>S</span>haffira{' '}
              <span style={{ color: '#FF6B6C' }}>Alya Mevia</span>
            </Text>
            <Text
              textSize={{ sm: '16px', md: '18px' }}
              textWeight="600"
              m={{ y: { xs: '3rem', md: '2rem' } }}
              maxW="35em"
            >
              I always have the passion to study languages. So far I have
              learned Bahasa Indonesia (my mother language), English, Japanese,
              Korean, Deutsch, Python, JavaScript, C, C++, and... oh! It’s a
              different type of language? Whoops~
            </Text>
          </Div>
          <Div
            style={{
              backgroundImage: `url(${portrait})`,
              backgroundRepeat: 'no-repeat',
            }}
            bgPos="100% 20%"
            bgSize="120%"
            minW="20vw"
            minH="15em"
            rounded={{ t: 'circle' }}
          ></Div>
        </Div>
      </Div>
      <Div m={{ x: '10%', y: '3em' }}>
        <Div>
          <Headline text="Experience" />
          <Div></Div>
        </Div>
      </Div>
    </>
  );
}

export default AboutMe;
