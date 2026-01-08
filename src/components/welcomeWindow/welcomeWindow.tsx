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

    function switchPage () {

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
                                    <br/> I am currently a <span className='font-bold'>Senior</span> at the <a href='https://und.edu/' target='_blank'><span className='text-green-700 underline'>University of North Dakota</span></a> with a Bachelor's Degree in Computer Science.
                                    <br/> I have a passion for software engineering; more specifically, software development, and full-stack development, and UI design.
                                    <br/>
                                    <br/> I currently work for <a href='https://www.ideal-aerosmith.com/' target='_blank'><span className='text-blue-700 underline'>Ideal Aerosmith</span></a> as a <span className='font-bold'>Software Engineer Intern</span>  where I have gained lots of career expierence!
                                </p>
                            :
                                <p className='WelcomeWindow-p font-mono'> 
                                    More about me...
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