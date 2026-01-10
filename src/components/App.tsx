import { useEffect, useRef, useState } from 'react';

import { TaskBar } from '@react95/core/TaskBar';
import { Button } from '@react95/core/Button';
import { List  } from '@react95/core/List';
import { ReaderClosed, WindowsExplorer, Earth, Wordpad, Computer, RecycleEmpty, Mdisp321, Wintrust103 } from '@react95/icons';

import Draggable from 'react-draggable';

import WelcomeWindow from './welcomeWindow/welcomeWindow';
import ExperienceWindow from './experienceWindow/experienceWindow';
import HeadShotImg from '../assets/nathen_headshot.jpg';
import WindowsCloudsImg from '../assets/windows_clouds.jpg';
import LinkedInImg from '../assets/linkedin_pixel_logo_icon.png';
import GithubImg from '../assets/github_pixel_icon.png';
import TopographyImg from '../assets/topography-micron.svg';

import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';
import './app.css';

export default function App() {
    {/* States */}
    const [crtFilter, setCrtFilter] = useState<'crt' | ''>('crt');
    const [crtFilterToggleState, setCrtFilterToggleState] = useState<boolean>(false);

    const [activeWindow, setActiveWindow] = useState<boolean>(true);
    const [showWelcomeWindow, setShowWelcomeWindow]  = useState<boolean>(false);
    const [showExperienceWindow, setShowExperienceWindow]  = useState<boolean>(true);

    {/* REFS FOR EACH DRAGGABLE ITEM */}
    const welcomeWindowRef = useRef(null);
    const experienceWindowRef = useRef(null);
    const welcomeIconRef = useRef(null);
    const educationIconRef = useRef(null);
    const experienceIconRef = useRef(null);
    const schoolProjIconRef = useRef(null);
    const hobbyProjIconRef = useRef(null);
    const recycleIconRef = useRef(null);
    const githubIconRef = useRef(null);
    const linkedInIconRef = useRef(null);

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
                {/********************** WINDOWS ************************/}
                <Draggable 
                    nodeRef={welcomeWindowRef}
                    bounds='parent'
                    defaultPosition={{x: 600, y: 100}}
                    handle='#Welcome-titlebar'
                >
                    <div
                        ref={welcomeWindowRef}
                        className='absolute inline-block z-20'
                    >
                        <WelcomeWindow 
                            activeWindow={activeWindow}
                            showWindow={showWelcomeWindow}
                            setShowWindow={setShowWelcomeWindow}
                        />
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={experienceWindowRef}
                    bounds='parent'
                    defaultPosition={{x: 650, y: 150}}
                    handle='#Experience-titlebar'
                >
                    <div
                        ref={experienceWindowRef}
                        className='absolute inline-block z-20'
                    >
                        <ExperienceWindow 
                            activeWindow={activeWindow}
                            showWindow={showExperienceWindow}
                            setShowWindow={setShowWelcomeWindow}
                        />
                    </div>
                </Draggable>


                {/********************** SHORTCUT ICONS ************************/}
                <Draggable 
                    nodeRef={recycleIconRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 500}}
                >
                    <div 
                        ref={recycleIconRef}
                        className='absolute h-20 w-20 z-9 m-1'
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
                    nodeRef={welcomeIconRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 0}}
                >
                    <div 
                        ref={welcomeIconRef}
                        className='absolute h-20 w-20 z-15 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                            onDoubleClick={() => {
                                setShowWelcomeWindow(true)
                            }}
                        >
                            <Earth variant="32x32_4"/>
                            <p className='App-shortcut-text-spacing'> Welcome! </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={experienceIconRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 70}}
                >
                    <div 
                        ref={experienceIconRef}
                        className='absolute h-20 w-20 z-15 m-1'
                    >
                        <div
                            className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                            onDoubleClick={() => {
                                setShowExperienceWindow(true)
                            }}
                        >
                            <Computer variant="32x32_4"/>
                            <p className='App-shortcut-text-spacing'> Experience </p>
                        </div>
                    </div>
                </Draggable>
                <Draggable 
                    nodeRef={educationIconRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 140}}
                >
                    <div 
                        ref={educationIconRef}
                        className='absolute h-20 w-20 z-15 m-1'
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
                    nodeRef={schoolProjIconRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 210}}
                >
                    <div 
                        ref={schoolProjIconRef}
                        className='absolute h-20 w-20 z-15 m-1'
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
                    nodeRef={hobbyProjIconRef}
                    bounds='parent'
                    defaultPosition={{x: 0, y: 280}}
                >
                    <div 
                        ref={hobbyProjIconRef}
                        className='absolute h-20 w-20 z-15 m-1'
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
                    nodeRef={githubIconRef}
                    bounds='parent'
                    defaultPosition={{x: 80, y: 0}}
                >
                    <div 
                        ref={githubIconRef}
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
                    nodeRef={linkedInIconRef}
                    bounds='parent'
                    defaultPosition={{x: 80, y: 70}}
                >
                    <div 
                        ref={linkedInIconRef}
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
                className='absolute top-2 right-2 z-1 font-extrabold text-[16px] z-10'
                onClick={() => {
                    onCrtToggleClick()
                }}
            >
                <span className='text-red-500 font-bold'>R</span><span className='text-green-600 font-bold'>G</span><span className='text-blue-600'>B</span>
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
