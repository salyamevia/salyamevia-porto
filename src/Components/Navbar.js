import React, { Component, useState } from 'react';
import { Div, Button, Icon, SideDrawer, Text } from 'atomize';
import logo from '../Image/logo.svg';
import linkedin from '../Image/linkedin.svg';
import medium from '../Image/medium.svg';
import instagram from '../Image/instagram.svg';
import github from '../Image/github.svg';

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      <Div d="flex" m={{ b: '4rem' }} flexDir="column" align="center">
        <Button
          h="7em"
          p={{ x: '1.25rem' }}
          textSize="body"
          textColor="dark"
          textWeight="600"
          bg="none"
          m={{ r: '0.5rem' }}
        >
          About Me
        </Button>
        <Button
          h="7em"
          p={{ x: '1.25rem' }}
          textSize="body"
          textColor="dark"
          textWeight="600"
          bg="none"
          m={{ r: '0.5rem' }}
        >
          Projects
        </Button>
        <Div d="flex">
          <a
            href="https://www.linkedin.com/in/shaffira-alya-mevia/"
            target="_blank"
            rel="noreferrer"
          >
            <Button h="7em" bg="none">
              <img src={linkedin} alt="See LinkedIn Profile" />
            </Button>
          </a>
          <a
            href="https://medium.com/@salyamevia"
            target="_blank"
            rel="noreferrer"
          >
            <Button h="7em" bg="none">
              <img src={medium} alt="See Medium" />
            </Button>
          </a>
        </Div>
        <Div d="flex">
          <a
            href="https://www.instagram.com/salyamevia/"
            target="_blank"
            rel="noreferrer"
          >
            <Button h="7em" bg="none">
              <img src={instagram} alt="See Intagram" />
            </Button>
          </a>
          <a
            href="https://github.com/salyamevia"
            target="_blank"
            rel="noreferrer"
          >
            <Button h="7em" bg="none">
              <img src={github} alt="See GitHub Portfolio" />
            </Button>
          </a>
        </Div>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: '1rem' }}
        >
          Close
        </Button>
      </Div>
    </SideDrawer>
  );
};

function Navbar() {
  const [showDrawer, hideDrawer] = useState(false);

  return (
    <Div d="flex" justify="space-between" p={{ x: '3rem', y: '2rem' }}>
      <Div>
        <Button h="3rem" bg="none">
          <img src={logo} alt="logo" />
        </Button>
      </Div>

      {/* Mobile */}
      <Div d={{ sm: 'flex', md: 'none' }}>
        <Button h="3rem" bg="none" onClick={() => hideDrawer(true)}>
          <Icon name="Menu" size="1rem" color="dark" />
        </Button>
        <BasicSideDrawer
          isOpen={showDrawer}
          onClose={() => hideDrawer(false)}
        />
      </Div>

      {/* Desktop */}
      <Div d={{ xs: 'none', sm: 'none', md: 'flex' }}>
        <Button
          h="3rem"
          p={{ x: '1.25rem' }}
          textSize="body"
          textColor="dark"
          textWeight="600"
          bg="none"
          m={{ r: '0.5rem' }}
        >
          About Me
        </Button>

        <Button
          h="3rem"
          p={{ x: '1.25rem' }}
          textSize="body"
          textColor="dark"
          textWeight="600"
          bg="none"
          m={{ r: '0.5rem' }}
        >
          Projects
        </Button>

        <a
          href="https://www.linkedin.com/in/shaffira-alya-mevia/"
          target="_blank"
          rel="noreferrer"
        >
          <Button h="3rem" bg="none">
            <img src={linkedin} alt="See LinkedIn Profile" />
          </Button>
        </a>
        <a
          href="https://medium.com/@salyamevia"
          target="_blank"
          rel="noreferrer"
        >
          <Button h="3rem" bg="none">
            <img src={medium} alt="See Medium" />
          </Button>
        </a>
        <a
          href="https://www.instagram.com/salyamevia/"
          target="_blank"
          rel="noreferrer"
        >
          <Button h="3rem" bg="none">
            <img src={instagram} alt="See Intagram" />
          </Button>
        </a>
        <a
          href="https://github.com/salyamevia"
          target="_blank"
          rel="noreferrer"
        >
          <Button h="3rem" bg="none">
            <img src={github} alt="See GitHub Portfolio" />
          </Button>
        </a>
      </Div>
    </Div>
  );
}

export default Navbar;
