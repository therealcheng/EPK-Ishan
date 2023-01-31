import Image from 'next/image';
import artwork3 from '../public/Artwork3.jpeg';
import { Text } from '@nextui-org/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // ? needs gif image
  const [isGif, setIsGif] = useState(false);
  return (
    <div>
      <Text
        h1
        size={70}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        className='pl-8 absolute md:static z-50'
        weight='bold'
        id='About'
      >
        Ishan
      </Text>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 1.61803398875 }}
        className='lg:hidden'
      >
        <Image
          onClick={console.log('clicked image')}
          src={artwork3}
          alt='Portrait of Ishan'
        />
      </motion.div>
    </div>
  );
};

export default Hero;
