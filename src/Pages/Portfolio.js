import React, { Component } from 'react';
import { Div, Text, Button, Icon } from 'atomize';

import Navbar from '../Components/Navbar.js';

function Portfolio() {
  return (
    <>
      <Div textColor="dark" bg="pink">
        <Navbar />
        <Div
          d="flex"
          flexDir={{ xs: 'column', sm: 'column', md: 'row' }}
          p={{ x: '10%', b: '5%' }}
          align="center"
          justify="space-between"
        >
          <Div d="flex" flexDir="column" justify="center" h="85%" m="0px">
            <Text fontFamily="display" textSize="48px">
              ⁕Projects that I have done
            </Text>
            <Text
              textSize="18px"
              textWeight="600"
              m={{ y: '2rem', b: { xs: '3rem', sm: '0px' } }}
              maxW="45em"
            >
              These are some of the curated projects that I have done and would
              like to share it with everyone ヾ(•ω•`)o
            </Text>
          </Div>
        </Div>
      </Div>
      <Div
        p={{ x: '10%', y: '3em', b: '7%' }}
        d="flex"
        align="center"
        justify="center"
      >
        <Text textSize="2em" textColor="disabled" m="9%">
          〒▽〒)/ Excuse me as this page is still under development!
        </Text>
      </Div>
    </>
  );
}

export default Portfolio;
