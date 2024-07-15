import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({nombre, descripcion, id, img,precio, stock}) => {
 console.log()

 const onAdd =(quantity) =>{
  console.log(`Agregaste ${quantity}productos`)
 }



 
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          w={"350px"}
          h={"350px"}
          objectFit={"cover"}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nombre}</Heading>

          <Text color="blue.600" fontSize="2xl">
            ${precio}
          </Text>
        <text>
          descripcion: {descripcion}
        </text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd} /> 
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default ItemDetail