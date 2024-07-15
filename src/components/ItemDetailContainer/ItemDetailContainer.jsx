import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock";
import { Box,Flex } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { HashLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] =useState(true)

  useEffect(() => {
    getProductById(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, []);
 

  return (
  
  <Box>
    {

loading ?
<Flex justify={'center'} aling={'center'} h={'50vh'}>

      

<HashLoader color="#17d7ba" />   
</Flex> 
   
:
<Flex justify={'center'} aling={'center'} h={'50vh'}>
    <ItemDetail  {...product}/>
  </Flex>
   }
  </Box>
)
};

export default ItemDetailContainer;
