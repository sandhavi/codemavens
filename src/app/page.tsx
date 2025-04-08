'use client';
import React from 'react';
import NavBar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import FAQ from '../components/faq';
import Featuers from '../components/featuers';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Featuers />
      <FAQ />
      <Footer />
    </>
  );
}