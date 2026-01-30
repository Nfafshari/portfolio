import { useState } from 'react';
import { Frame } from '@react95/core/Frame';
import { TitleBar } from '@react95/core/TitleBar';
import { Progman44, Progman45 } from '@react95/icons';

import WelcomeWindowProps from './welcomeWindow.types';
import './welcomeWindow.css';

export default function WelcomeWindow (props: WelcomeWindowProps) {
    const [pageNum, setPageNum] = useState<'1' | '2'>('1');

    function closeWindow () {
        props.setShowWindow(false);
    }

    function minimizeWindow () {

    }

    if (props.showWindow) {
        return (
            <Frame
                h='500px' 
                w='600px' 
                bgColor='$material'
                boxShadow={props.activeWindow ? '$out' : '$in'}
                padding='2px'
            >
                <TitleBar 
                    title='Welcome!'
                    id='Welcome-titlebar'
                    active={props.activeWindow}
                >
                    <TitleBar.Minimize 
                        onClick={() => {
                            minimizeWindow()
                        }}
                    />
                    <TitleBar.Close 
                        onClick={() => {
                            closeWindow()
                        }}
                    />
                </TitleBar>
                
                <h1 className='WelcomeWindow-h1 ml-4 mt-2 font-mono'> Welcome to my Portfolio! </h1>
                <div className='w-[100%] h-[100%]'>
                    <Frame w='95%' h='80%' bgColor='white' boxShadow='$in' style={{ position: 'relative', margin: 'auto', padding: '10px' }}>
                        {
                            pageNum == '1' ?
                                <p className='WelcomeWindow-p font-mono'> 
                                    My Name is Nathen Afshari. I'm from East Grand Forks, MN.
                                    <br/>
                                    <br/> I am currently a <span className='WelcomeWindow-span font-bold'>Senior</span> at the <a href='https://und.edu/' target='_blank'><span className='WelcomeWindow-span text-green-700 underline'>University of North Dakota</span></a> with a Bachelor's Degree in Computer Science.
                                    <br/> I have a passion for software engineering; more specifically, software development, full-stack development, and UI design.
                                    <br/>
                                    <br/> I currently work for <a href='https://www.ideal-aerosmith.com/' target='_blank'><span className='WelcomeWindow-span text-orange-500 underline'>Ideal Aerosmith</span></a> as a <span className='WelcomeWindow-span font-bold'>Software Engineer Intern</span>  where I have gained meaningful career expierence!
                                </p>
                            :
                                <p className='WelcomeWindow-p font-mono'> 
                                    In my free time I enjoy hanging out with my friends, sports, working out, playing video games, and working on little side projects.
                                    <br/>
                                    <br/>
                                    <br/> This portfolio was built using
                                        <a href='https://react.dev/' target='_blank'> <span className='WelcomeWindow-span text-sky-300 underline ml-1'>React</span></a> + 
                                        <a href='https://vite.dev/' target='_blank'> <span className='WelcomeWindow-span text-violet-700 underline ml-1'>Vite</span></a> + 
                                        <a href='https://www.typescriptlang.org/' target='_blank'> <span className='WelcomeWindow-span text-blue-700 underline'>TypeScript</span></a>. Additionally, I used 
                                        <a href='https://tailwindcss.com/' target='_blank'> <span className='WelcomeWindow-span text-sky-700 underline ml-1'>Tailwind.css</span></a> and 
                                        <a href='https://react95.github.io/React95/?path=/story/all--all' target='_blank'> <span className='WelcomeWindow-span text-pink-500 underline'>React95</span> </a>
                                        for this nice <span className='font-bold text-lg'>Windows</span><span className='text-red-600 font-bold text-lg'>9</span><span className='text-blue-800 font-bold text-lg m-0'>5</span> retro look!
                                </p>
                        }
                        <div className='flex absolute right-0 bottom-0'>
                            <p className='WelcomeWindow-page pt-2'> {pageNum}/2 </p>
                            {
                                pageNum == '1' ?
                                    <Progman45 
                                        variant="32x32_1" 
                                        className='cursor-pointer'
                                        onClick={() => {
                                            setPageNum('2')
                                        }}
                                    />
                                :
                                    <Progman44 
                                        variant="32x32_1" 
                                        className='cursor-pointer'
                                        onClick={() => {
                                            setPageNum('1')
                                        }}
                                    />
                            }
                        </div>
                    </Frame>
                </div>
            </Frame>
        );
    }
}