import { useState } from 'react';

import headShot1 from '../assets/nathen_headshot_1.jpg';
import linkedInImg from '../assets/LinkedIn_icon.svg.png';
import gmailImg from '../assets/gmail_icon.png';
import githubImg from '../assets/github_icon.png';
import HoveringLetters from './hoveringLetters/hoveringLetters';
import TiltContainer from './tiltContainer/tiltContainer';

import './app.css';

export default function App() {
    const sizeMap = {
        "xs": "text-xs",
        "sm": "text-sm",
        "base": "text-base",
        "lg": "text-lg",
        "xl": "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
    }

    return (
        <div className='flex w-screen'>
            <div id='Sidebar' className='bg-slate-400 w-1/4 h-screen flex flex-col items-center shadow-xl shadow-black z-50'>
                pst. move your cursor over me
                <TiltContainer className='flex items-center justify-center h-1/3' constraint={18} perspective={400} shadow={true}>
                    <img src={headShot1} className='w-3/4 rounded-xl object-cover shadow-xl shadow-gray-600' alt='Headshot photo of Nathen Afshari'/>
                </TiltContainer>
                <div>
                    <ul className='text-slate-600 text-4xl underline m-5'>
                        <li className='mb-5 cursor-pointer'>
                            Experience
                        </li>
                        <li className='mb-5 cursor-pointer'>
                            Education
                        </li>
                        <li className='mb-5 cursor-pointer'>
                            School Projects
                        </li>
                        <li className='cursor-pointer'>
                            Hobby Projects
                        </li>
                    </ul>
                    <div className='flex flex-row'>
                        <a href='https://www.linkedin.com/in/nathen-afshari-364570294' target='_blank'>
                            <img className='w-10 ml-12 mt-5 mr-5 aspect-square cursor-pointer' src={linkedInImg} alt='linkedIn icon image quick link'/>
                        </a>
                        <a href='mailto:nathen.afshari@gmail.com'>
                            <img className='w-10 mt-5 mr-5 aspect-square cursor-pointer' src={gmailImg} alt='Gmail icon image quick link'/>
                        </a>
                        <a href='https://github.com/Nfafshari' target='_blank'>
                            <img className='w-10 mt-5 aspect-square cursor-pointer' src={githubImg} alt='Github icon image quick link'/>
                        </a>
                    </div>
                </div>
            </div>
            <div id='VerticalSplit' className='h-auto w-0.5 bg-gray-200 rounded-full gradient' />
            <div className='bg-white w-3/4 h-screen'>
                <div className='flex flex-row mt-5 justify-center position: static'>
                    <HoveringLetters text='Nathen' textSize={sizeMap['7xl']}/>
                    <HoveringLetters text='Afshari' textSize={sizeMap['7xl']}/>
                    <div className='ribbon -right-1 top-14 select-none'>
                        Responsive Page!
                    </div>
                </div>
                <div className='w-auto h-0.5 bg-gray-400 rounded-full ml-10 mr-10 mt-5 gradient'/>
                <div className='text-center mt-10'>
                    Hi, I am Nathen Afshari. I am a recent college grad from the University of North Dakota with a Bachelor's Degree in Computer Science.
                </div>
            </div>
        </div>
    )
}
