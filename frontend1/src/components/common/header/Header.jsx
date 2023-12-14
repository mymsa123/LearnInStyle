import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { useDisclosure } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button
} from '@chakra-ui/react'
const Header = () => {
  const [click, setClick] = useState(false)
 const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const btnRef = React.useRef()
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            {/* <div className='button'>GET CERTIFICATE</div> */}
          </div>
          <button className='toggle'>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars' ref={btnRef} colorScheme='teal' onClick={onOpen}></i>}
          </button>
        </nav>
      </header>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        direction='column'
        bgColor="white"
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerBody>
          <ul style={{marginTop:"200px",backgroundColor:"#1eb2a6",display:"flex",flexDirection:"column"}}>
            <li>
              <Link to='/' style={{marginBottom:"20px"}}>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          </DrawerBody>
          <DrawerFooter mt={0}>
            <Button variant='outline' mr={3} onClick={onClose} mt={0}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
