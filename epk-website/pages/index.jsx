import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import profilePic from '../public/Artwork1.JPEG';
import Nav from '@/components/Nav';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishan Electronic Press Kit</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='./icon.png' />
      </Head>
      <main className='bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
        <div>
          <h1 className='text-white text-xl'>Placeholder</h1>
        </div>
      </main>
    </>
  );
}
