"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import TextToSpeech from '../controls/t2s';
import VideoPlayer from '../controls/videoplayer';
export default function Home() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="./jewellery.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link> 

      <div id='ts1' className='absolute grid  grid-cols-3 gap-8'>
      <TextToSpeech text="Silk Thread Bundle" />
      <TextToSpeech text="Bangle" />
      <TextToSpeech text="Glue" />
      <TextToSpeech text="Scissor" />
      <TextToSpeech text="Beading Thread" />
      <TextToSpeech text="Beads" />
      <TextToSpeech text="Clasp" />
      <TextToSpeech text="Hooks" />
      <TextToSpeech text="Jump Ring" />
      </div> 
      <Link href='/jewelleryvp'><button id="computervp"  className="bi"/></Link> 
  </div>
    );
}



