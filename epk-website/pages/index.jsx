import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import profilePic from '../public/Artwork1.JPEG';
import Nav from '@/components/Nav';
import { motion } from 'framer-motion';
import Tab from '@/components/Tab';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishan Electronic Press Kit</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='./icon.png' />
      </Head>
      <main>
        <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
          <Tab />
          <h1 className='text-3xl font-bold underline'>Hello world!</h1>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image src={profilePic} alt='Picture of Ishan' width={200} />
          </motion.div>
        </div>
      </main>
    </>
  );
}
