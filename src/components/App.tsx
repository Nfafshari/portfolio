import { useEffect, useRef, useState } from 'react';

import { TaskBar, List, Button } from '@react95/core';
import { ReaderClosed, WindowsExplorer, Earth, Wordpad, Computer, RecycleEmpty, Mdisp321, Wintrust103 } from '@react95/icons';

import Draggable from 'react-draggable';

import HeadShotImg from '../assets/nathen_headshot.jpg';
import WindowsCloudsImg from '../assets/windows_clouds.jpg';
import LinkedInImg from '../assets/linkedin_pixel_logo_icon.png';
import GithubImg from '../assets/github_pixel_icon.png';
import TopographyImg from '../assets/topography-micron.svg';

import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';
import './app.css';
import WelcomeWindow from './welcomeWindow/welcomeWindow';

export default function App() {
    const [activeWindow, setActiveWindow] = useState<boolean>(true);
    const [crtFilter, setCrtFilter] = useState<'crt' | ''>('crt');
    const [crtFilterToggleState, setCrtFilterToggleState] = useState<boolean>(true);

    const nodeRef = useRef(null);

    function onCrtToggleClick () {
        if (crtFilterToggleState) {
            setCrtFilterToggleState(false);
            setCrtFilter('');
        } else {
            setCrtFilterToggleState(true);
            setCrtFilter('crt');
        }
    }

    return (
        <div 
            id='Background' 
            className={`${crtFilter} relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden z-0`}
            style={{ backgroundImage: `url(${WindowsCloudsImg})` }}
        >
            <div 
                id='Drag-zone'
                className='App-dragZone-size'
            >
                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 600, y: 100}}
                    handle='#Welcome-titlebar'
                >
                    <div
                        ref={nodeRef}
                        className='absolute h-5 w-[500px] z-20'
                    >
                        <WelcomeWindow 
                            activeWindow={activeWindow}
                        />
                    </div>
                </Draggable>

                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 0}}
                >
                    <div 
                        ref={nodeRef}
                        className='absolute h-20 w-20 z-10 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                        >
                            <Earth variant="32x32_4"/>
                            <p className='App-shortcut-text-spacing'> Welcome! </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 70}}
                >
                    <div 
                        ref={nodeRef}
                        className='absolute h-20 w-20 z-10 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                        >
                            <Computer variant="32x32_4"/>
                            <p className='App-shortcut-text-spacing'> Experience </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 140}}
                >
                    <div 
                        ref={nodeRef}
                        className='absolute h-20 w-20 z-10 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                        >
                            <Wintrust103 variant="32x32_4"/>
                            <p className='App-shortcut-text-spacing'> Education </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 210}}
                >
                    <div 
                        ref={nodeRef}
                        className='absolute h-20 w-20 z-10 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                        >
                            <Wordpad variant="32x32_4"/>
                            <p className='App-shortcut-text-spacing'> School Projects </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 280}}
                >
                    <div 
                        ref={nodeRef}
                        className='absolute h-20 w-20 z-10 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                        >
                            <Mdisp321 variant="32x32_4"/>
                            <p className='App-shortcut-text-spacing'> Hobby Projects </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 500}}
                >
                    <div 
                        ref={nodeRef}
                        className='absolute h-20 w-20 z-10 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                        >
                            <RecycleEmpty variant="32x32_4"/>
                            <p className='App-shortcut-text-spacing'> Recycle Bin </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 80, y: 0}}
                >
                    <div 
                        ref={nodeRef}
                        className='absolute h-20 w-20 z-10 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                        >
                            <img src={GithubImg} alt='Github Pixelated Image Icon' width={34} height={34} draggable='false'/>
                            <p className='App-shortcut-text-spacing'> Github </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={nodeRef}
                    bounds='parent'
                    defaultPosition={{x: 80, y: 70}}
                >
                    <div 
                        ref={nodeRef}
                        className='absolute h-20 w-20 z-10 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                        >
                            <img src={LinkedInImg} alt='Github Pixelated Image Icon' width={34} height={34} draggable='false'/>
                            <p className='App-shortcut-text-spacing'> LinkedIn </p>
                        </div>
                    </div>
                </Draggable>
            </div>

            <Button
                className='absolute top-2 right-2 z-10 font-extrabold text-[16px]'
                onClick={() => {
                    onCrtToggleClick()
                }}
            >
                <span className='text-red-500'>R</span><span className='text-green-600'>G</span><span className='text-blue-600'>B</span>
            </Button>

            <TaskBar
                className='App-taskBar-size'
                list={
                    <List>
                        <List.Item icon={<ReaderClosed variant="32x32_4" />}>
                            Local Disk (C:)
                        </List.Item>
                        <List.Item icon={<WindowsExplorer variant="32x32_4" />}>
                            Windows Explorer
                        </List.Item>
                    </List>
                }
            >
                
            </TaskBar>
        </div>
    );
}
