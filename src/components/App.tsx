import { useEffect, useState } from 'react';
import { TaskBar, Button, List, useModal, Modal, TitleBar } from '@react95/core';
import { ReaderClosed, WindowsExplorer, Earth, Computer, RecycleEmpty, Mdisp321, Wintrust103 } from '@react95/icons';

import Shortcut from './shortcut/shortcut';
import WelcomeWindow from './welcomeWindow/welcomeWindow';
import ExperienceWindow from './experienceWindow/experienceWindow';
import WindowsCloudsImg from '../assets/windows_clouds.jpg';
import LinkedInImg from '../assets/linkedin_pixel_logo_icon.png';
import GithubImg from '../assets/github_pixel_icon.png';

import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';

export default function App() {
    {/* States */}
    const [crtFilter, setCrtFilter] = useState<boolean>(false);

    const {
        add,
        remove,
        minimize,
        restore,
        focus
    } = useModal();

    function onCrtToggleClick () {
        setCrtFilter(prev => !prev)
    }

    function removeModal (id: string) {
        remove(id);
        minimize(id);
        focus('');
    }

    // set welcome window to show first and hide all others
    useEffect(() => {
        add({
            id: 'welcome-window',
            title: 'Welcome!',
            icon: <Earth />,
            hasButton: true
        });
        restore('welcome-window');
        focus('welcome-window');
    }, [])

    return (
        <div 
            id='Background' 
            className={`${crtFilter ? 'crt' : ''} relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden z-0`}
            style={{ backgroundImage: `url(${WindowsCloudsImg})` }}
        >
            <div 
                id='Drag-zone'
                className='dragZone-size'
            >
                {/********************** WINDOWS ************************/}
                <Modal
                    id='welcome-window'
                    icon={ <Earth /> }
                    title='Welcome!'
                    dragOptions={{
                        defaultPosition: { x: 600, y: 100 }
                    }}
                    titleBarOptions={[
                        <Modal.Minimize key='minimize' 
                            onClick={() => {
                                minimize('welcome-window');
                            }}
                        />,
                        <TitleBar.Close key='close' 
                            onClick={() => {
                                removeModal('welcome-window')
                            }}
                        />
                    ]}
                >
                    <Modal.Content w="550px" h="500px" boxShadow="$in" className="!p-0">
                        <WelcomeWindow />
                    </Modal.Content>
                </Modal>
                <Modal
                    id='experience-window'
                    icon={ <Computer /> }
                    title='Experience'
                    dragOptions={{
                        defaultPosition: { x: 650, y: 150 }
                    }}
                    titleBarOptions={[
                        <Modal.Minimize key='minimize' 
                            onClick={() => {
                                minimize('experience-window');
                            }}
                        />,
                        <TitleBar.Close key='close' 
                            onClick={() => {
                                removeModal('experience-window')
                            }}
                        />
                    ]}
                >
                    <Modal.Content w="700px" h="500px" boxShadow="$in" className="!p-0">
                        <ExperienceWindow />
                    </Modal.Content>
                </Modal>

                {/* <DraggableWindow 
                    defaultPosition={{x: 600, y: 100}}
                    handleId='#Welcome-titlebar'
                >
                    <WelcomeWindow 
                        activeWindow={activeWindow}
                        showWindow={showWelcomeWindow}
                        setShowWindow={setShowWelcomeWindow}
                    />
                </DraggableWindow>
                <DraggableWindow
                    defaultPosition={{x: 650, y: 150}}
                    handleId='#Experience-titlebar'
                >
                    <ExperienceWindow 
                        activeWindow={activeWindow}
                        showWindow={showExperienceWindow}
                        setShowWindow={setShowExperienceWindow}
                    />
                </DraggableWindow>
                <DraggableWindow
                    defaultPosition={{x: 650, y: 150}}
                    handleId='#Education-titlebar'
                >
                    <EducationWindow 
                        activeWindow={activeWindow}
                        showWindow={showEducationWindow}
                        setShowWindow={setShowEducationWindow}
                    />
                </DraggableWindow>
                <DraggableWindow
                    defaultPosition={{x: 650, y: 150}}
                    handleId='#Projects-titlebar'
                >
                    <ProjectsWindow 
                        activeWindow={activeWindow}
                        showWindow={showProjectsWindow}
                        setShowWindow={setShowProjectsWindow}
                    />
                </DraggableWindow> */}


                {/********************** SHORTCUT ICONS ************************/}
                <Shortcut 
                    icon={
                        <RecycleEmpty/>
                    }
                    label='Recycle Bin'
                    defaultPosition={{ 
                        x: 0, 
                        y: 500
                    }}
                />
                <Shortcut 
                    icon={
                        <Earth/>
                    }
                    label='Welcome!'
                    defaultPosition={{ 
                        x: 0, 
                        y: 0
                    }}
                    onDoubleClick={() => {
                        add({
                            id: 'welcome-window',
                            title: 'Welcome!',
                            icon: <Earth />,
                            hasButton: true
                        });
                        restore('welcome-window');
                        focus('welcome-window');
                    }}
                />
                <Shortcut 
                    icon={
                        <Computer/>
                    }
                    label='Experience'
                    defaultPosition={{ 
                        x: 0, 
                        y: 70
                    }}
                />
                <Shortcut
                    icon={
                        <Wintrust103/>
                    }
                    label='Education'
                    defaultPosition={{
                        x: 0,
                        y: 140
                    }}
                />
                <Shortcut
                    icon={
                        <Mdisp321/>
                    }
                    label='Projects'
                    defaultPosition={{
                        x: 0,
                        y: 210
                    }}
                />
                <Shortcut
                    icon={
                        <img src={GithubImg} alt='Github Pixelated Image Icon' width={34} height={34} draggable='false'/>
                    }
                    label='Github'
                    defaultPosition={{
                        x: 70,
                        y: 0
                    }}
                    externalLink={true}
                />
                <Shortcut
                    icon={
                        <img src={LinkedInImg} alt='Github Pixelated Image Icon' width={34} height={34} draggable='false'/>
                    }
                    label='LinkedIn'
                    defaultPosition={{
                        x: 70,
                        y: 70
                    }}
                    externalLink={true}
                />
            </div>

            <Button
                className='absolute top-2 right-2 z-1 font-extrabold text-[16px] z-10'
                onClick={() => {
                    onCrtToggleClick()
                }}
            >
                <span className='text-red-500 text-xl font-sans font-bold'>R</span><span className='text-green-600 text-xl font-sans font-bold'>G</span><span className='text-blue-600 text-xl font-sans font-bold'>B</span>
            </Button>

            <TaskBar
                className='taskBar-size'
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
