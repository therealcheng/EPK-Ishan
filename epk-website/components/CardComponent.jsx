import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import { motion } from 'framer-motion';

export const CardComponent = ({ src, title, description, link }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    <Card css={{ w: '100%', h: '400px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col></Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={src}
          width='100%'
          height='100%'
          objectFit='cover'
          alt='Card background'
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffffAA',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text size={12} weight='bold' transform='uppercase' color='black'>
              {title}
            </Text>
            <Text h3 color='#E96479'>
              {description}
            </Text>
          </Col>
          <Col>
            <Row justify='flex-end'>
              <Button
                flat
                auto
                rounded
                color='secondary'
                onPress={() => {
                  window.open(link);
                }}
              >
                <Text
                  css={{ color: '#4D455D' }}
                  size={12}
                  weight='bold'
                  transform='uppercase'
                >
                  Watch
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  </motion.div>
);
