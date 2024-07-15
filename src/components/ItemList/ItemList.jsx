import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Item from '../../Item/Item'
import { BsJustify } from 'react-icons/bs'

const ItemList = ({productos}) => {
    console.log(productos)

  return (
    <Flex wrap={'wrap'} Justify={'center'} align={'center'}>
      {
      productos.map((prod) => ( 
        <Box key={prod.id}>
          <Item {...prod}/>

        </Box>
      ))
}
    </Flex>
  )
}

export default ItemList