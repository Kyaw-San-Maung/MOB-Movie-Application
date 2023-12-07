
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
              <Nav className='me-auto my-2 my-lg-0' style={{maxHeight: '100px'}} navbarScroll>
                  <NavLink className='nav-link' to='/'>Home</NavLink>
                  <NavLink className='nav-link' to='/watchList'>Watch List</NavLink>
              </Nav>
              <Button variant='outline-info' className='me-2'>Login</Button>
              <Button variant='outline-info' className='me-2'>Register</Button>
          </Navbar.Collapse>
   </Navbar>
  )
}
