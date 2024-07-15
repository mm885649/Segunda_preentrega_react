import React from "react";
 import { Image } from '@chakra-ui/react'
import CardWidget from '../CardWidget/CardWidget'
import { Box } from '@chakra-ui/react'
import logo from '../../assets/img/iconos/deportem_logo.jpg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Button,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { Flex, Spacer } from '@chakra-ui/react'
import './NavBar.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} aling={'center'} height={'10vh'} w={'100%'}>
        
      <Heading ml={4}> <Link to='/'> <Image src= {logo} alt='Deportem'/> </Link></Heading>  
      {/* <Box boxSize='sm'> */}
        
      <Menu>
        <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
      Categorias
        </MenuButton>
        <MenuList>
          <MenuItem><Link to= '/categorias/playeras'>Playeras </Link></MenuItem>
          <MenuItem><Link to= '/categorias/pants'>pants </Link></MenuItem>
          <MenuItem><Link to="/categorias/tenis">Tenis</Link> </MenuItem>
        </MenuList>
      </Menu>

      <CardWidget />
      {/* </Box> */}
    </Flex>
  );
}; 

export default NavBar