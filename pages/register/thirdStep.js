import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { useState } from 'react';
import {
  Heading,
  Flex,
  Box,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Button,
  Link,
  Grid,
  GridItem,
  Spacer,
  VStack,
  Divider,
  Input,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  Image,
  Center
} from "@chakra-ui/react";
import next from 'next';

const ThirdStep = ({setEmail, email, setPassword, password, nextStep, prevStep}) => {
  const [localEmail, setLocalEmail ] = useState(email);
  const [localPassword, setLocalPassword] = useState(password);
  const [localPassword2, setLocalPassword2] = useState(password);
  const [invalidEmail, setInvalidEmail] = useState(!validEmail(email) && email!=='')
  
  const handleEmail = (event) => {
    setLocalEmail(event.target.value);
    setInvalidEmail(!validEmail(event.target.value))
  }

  const handlePassword1 = (event) => {
    setLocalPassword(event.target.value);
  }

  const handlePassword2 = (event) => {
    setLocalPassword2(event.target.value);  //Estos handlers se pueden reducir a uno solo pasandolo como parametro
  }

  function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const moveForward = () => {
    setPassword(localPassword)
    setEmail(localEmail)
    nextStep()
  }
  const moveBackwards = () => {
    setEmail(localEmail)
    setPassword(localPassword===localPassword2?localPassword:"")
    prevStep()
  }

  return (
    <VStack>
        <Breadcrumb separator={">"} w='full' padding={'2%'} fontSize = "3xl">
            <BreadcrumbItem>
                <Text fontSize={['xs', 'sm', '2xl']}>Inscripcion</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Text  fontSize={['xs', 'sm', '2xl']}>Datos equipo</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Text color={"#03caa1"} fontSize={['xs', 'sm', '2xl']}>Mail y contraseña</Text>
            </BreadcrumbItem>
       </Breadcrumb>
        <b><Text paddingTop={"5%"} color="#03caa1" fontSize={['2xl', '3xl', '4xl']}> EMAIL </Text></b>
        <Input borderWidth='1.5px'  errorBorderColor="red.500" isInvalid={invalidEmail} value={localEmail} onChange={handleEmail} textColor={"black"} bg="white" focusBorderColor='white' w={['300px', '400px', '500px']} />
        <b><Text paddingTop={"10%"} color="#03caa1" fontSize={['2xl', '3xl', '4xl']}> CONTRASEÑA </Text> </b>
        <Input borderWidth='1.5px'  errorBorderColor="red.500" isInvalid={localPassword!==localPassword2} value={localPassword} onChange={handlePassword1} textColor={"black"} bg="white" focusBorderColor='white' w={['300px', '400px', '500px']} type={"password"}/>
        <b><Text paddingTop={"10%"} color="#03caa1" fontSize={['2xl', '3xl', '4xl']}> REPETIR CONTRASEÑA </Text> </b>
        <Input borderWidth='1.5px'  errorBorderColor="red.500" isInvalid={localPassword!==localPassword2} value={localPassword2} onChange={handlePassword2} textColor={"black"} bg="white" focusBorderColor='white' w={['300px', '400px', '500px']} type={"password"}/>
        <Text align={"center"} fontSize={['sm', 'lg', 'xl']} paddingTop={"1%"}>Recorda que estos datos son para  <Text as="span" color="#03caa1"> iniciar sesion</Text></Text>
        <Text fontSize={['sm', 'lg', 'xl']} color='red.500'>{invalidEmail ? "Email no valido" : "" }</Text>
        <Text fontSize={['sm', 'lg', 'xl']} color='red.500'>{localPassword !== localPassword2 ? "Las constraseñas deben coincidir" : "" }</Text>
        <Center paddingTop='2%'>
          <HStack>
            <Button onClick={moveBackwards}
              size={["sm", "lg"]}
              height="48px"
              width="200px"
              border="5px"
              color="black"
              variant="solid"
              bgColor="CSGreen"
              _hover={{"backgroundColor":'#05eda7'}}
              > 
              Volver 
            </Button>
            <Button onClick={moveForward}
              colorScheme="orange"
              size={["sm", "lg"]}
              height="48px"
              width="200px"
              border="5px"
              color="black"
              variant="solid"
              bgColor="orange"
              isDisabled={invalidEmail || localPassword!==localPassword2 || localPassword===""}
              > 
              Siguiente 
            </Button>
          </HStack>
        </Center>
    </VStack>
  );
};
//size={['sm','md','lg','xl','2xl']
export default ThirdStep