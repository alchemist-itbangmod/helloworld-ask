import React from 'react';
import { Card, Heading, Image, Box, Flex, Button } from 'rebass';
import color from '../Theme/color';

const photo = '/static/img/debugging.jpg';

const CardComponent = () => {
  const [oldWord, newWord] = React.useState('Card');
  return (
    <Flex>
      <Box alignSelf="center" p={3} width={1 / 2} color="black" flex>
        <Card width={256}>
          <Image src={photo} />
          <Heading fontSize={[4, 5, 6]}>{oldWord}</Heading>
          <Button bg="blue" color="white" onClick={() => newWord('hello')}>
            Click
          </Button>
        </Card>
      </Box>
    </Flex>
  );
};

export default CardComponent;
