
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function header() {
  return (
      <Navbar bg='dark' variant='dark' expand="lg">
          <Navbar.Brand href='/' style={{ color: '#f00000' }}>
              <div><i class="fa-solid fa-video-slash"></i>MOB-Movie</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
              
          </Navbar.Collapse>
   </Navbar>
  )
}
