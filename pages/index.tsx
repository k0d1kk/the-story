import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RoomsComp from '@/components/RoomsComp';
import Why from '@/components/Why';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Why />
      <RoomsComp />
      <Footer />
    </>
  );
}
