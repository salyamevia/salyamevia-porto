import React, { Component } from 'react';
import { Div, Text, Button, Icon } from 'atomize';

import '../index.css';
import Navbar from '../Components/Navbar.js';
import profile from '../Image/profile.png';

import edu from '../Content/edu.json';
import cert from '../Content/cert.json';
import hobbies from '../Content/hobbies.json';
import lang from '../Content/lang.json';
import skills from '../Content/skills.json';
import work from '../Content/work.json';

const RolePlaceContent = (props) => {
  let file = props.file;
  return (
    <div
      class="gridContainter"
      style={{
        display: 'grid',
        gridGap: '2rem',
        gridAutoFlow: 'row',
        margin: '1rem 0',
      }}
    >
      {file.map((item) => {
        return (
          <Div>
            <Text textColor="pink">{item.role}</Text>
            <a href={item.placelink} target="_blank" rel="noreferrer">
              <Text textColor="dark" textDecor="underline">
                @ {item.place}
              </Text>
            </a>
            <Text>{item.duration}</Text>
          </Div>
        );
      })}
    </div>
  );
};
const ListContent = (props) => {
  let file = props.file;
  return (
    <div
      class="gridContainter"
      style={{
        display: 'grid',
        gridGap: '2rem',
        gridAutoFlow: 'row',
        margin: '1rem 0',
      }}
    >
      {file.map((item) => {
        return <Text>{item}</Text>;
      })}
    </div>
  );
};
const LangContent = (props) => {
  let file = props.file;
  return (
    <div
      class="gridContainter"
      style={{
        display: 'grid',
        gridGap: '2rem',
        gridAutoFlow: 'row',
        margin: '1rem 0',
      }}
    >
      {Object.keys(file).map((key) => {
        return (
          <Div>
            <Text textColor="pink">{key}</Text>
            {file[key].map((item) => {
              return <Text>* {item}</Text>;
            })}
          </Div>
        );
      })}
    </div>
  );
};

const Headline = (props) => {
  let text = props.text;
  return (
    <Text
      fontFamily="heading"
      textSize={{ xs: '24px', md: '36x' }}
      textColor="teal"
      m={{ t: '1.5em' }}
    >
      {text}
    </Text>
  );
};

function AboutMe() {
  return (
    <>
      <Button
        h="3.5rem"
        w="3.5rem"
        pos="fixed"
        bottom="0"
        right="0"
        bg="none"
        rounded="circle"
        border="1px solid"
        borderColor="dark"
        m="1rem"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="Up" size="2em" />
      </Button>
      <Div textColor="dark" bg="lime">
        <Navbar />
        <Div
          d="flex"
          flexDir={{ xs: 'column', sm: 'column', md: 'row' }}
          p={{ x: '10%', b: '1em' }}
          align="center"
          justify="space-between"
        >
          <Div d="flex" flexDir="column" justify="center" h="85%" m="0px">
            <Text fontFamily="display" textSize="48px">
              ⁕My name is <span style={{ color: '#FF6B6C' }}>S</span>haffira{' '}
              <span style={{ color: '#FF6B6C' }}>Alya Mevia</span>
            </Text>
            <Text
              textSize="18px"
              textWeight="600"
              m={{ y: '2rem', b: { xs: '3rem', sm: '0px' } }}
              maxW="45em"
            >
              I always have the passion to study languages. So far I have
              learned Bahasa Indonesia, English, Japanese, Korean, Deutsch,
              Python, SQL, JavaScript, C, C++, and... oh! It's a different type
              of language? Whoops~
            </Text>
          </Div>
          <Div
            style={{
              backgroundImage: `url(${profile})`,
              backgroundRepeat: 'no-repeat',
            }}
            bgSize="100%"
            minW="20em"
            minH="20em"
          ></Div>
        </Div>
      </Div>
      <Div p={{ x: '10%', y: '3em', b: '7%' }}>
        <Div>
          <Headline text="Experience" />
          <RolePlaceContent file={work} />
          <Headline text="Education" />
          <RolePlaceContent file={edu} />
          <Headline text="Skills" />
          <ListContent file={skills} />
          <Headline text="Professional Certification" />
          <RolePlaceContent file={cert} />
          <Headline text="Languages" />
          <LangContent file={lang} />
          <Headline text="Also busy with.. ♪(^_^*)" />
          <ListContent file={hobbies} />
        </Div>
      </Div>
    </>
  );
}

export default AboutMe;
