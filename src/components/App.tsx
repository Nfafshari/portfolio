import { useEffect } from 'react';
import { TaskBar, List, useModal, Modal, TitleBar } from '@react95/core';
import { ReaderClosed, WindowsExplorer, Earth, Computer, RecycleEmpty, Mdisp321, Wintrust103 } from '@react95/icons';

import Shortcut from './shortcut/shortcut';
import WelcomeWindow from './welcomeWindow/welcomeWindow';
import ExperienceWindow from './experienceWindow/experienceWindow';
import EducationWindow from './educationWindow/educationWindow';
import ProjectsWindow from './projectsWindow/projectsWindow';
import WindowsCloudsImg from '../assets/windows_clouds.jpg';
import LinkedInImg from '../assets/linkedin_pixel_logo_icon.png';
import GithubImg from '../assets/github_pixel_icon.png';

import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';

export default function App() {
    {/* States */}
    const {
        add,
        remove,
        minimize,
        restore,
        focus
    } = useModal();

    function removeModal (id: string) {
        remove(id);
        minimize(id);
        focus('');
    }

    function addModal (id: string, title: string, icon: React.ReactElement) {
        add({
            id: id,
            title: title,
            icon: icon,
            hasButton: true
        });
        restore(id);
        focus(id);
    }

    useEffect(() => {
        // set welcome window to show first
        addModal('welcome-window', 'Welcome!', <Earth />);
    }, [])

    useEffect(() => {
        // hide all other modals
        removeModal('experience-window');
        removeModal('education-window');
        removeModal('projects-window');
    }, [])

    return (
        <div 
            id='Background' 
            className={`relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden z-0`}
            style={{ backgroundImage: `url(${WindowsCloudsImg})` }}
        >
            {/********************** SHORTCUT ICONS ************************/}
            <div 
                id='Drag-zone'
                className='dragZone-size z-0'
            >
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
                        addModal('welcome-window', 'Welcome!', <Earth />);
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
                    onDoubleClick={() => {
                        addModal('experience-window', 'Experience', <Computer />);
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
                    onDoubleClick={() => {
                        addModal('education-window', 'Education', <Wintrust103 />);
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
                    onDoubleClick={() => {
                        addModal('projects-window', 'Projects', <Mdisp321 />);
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
                    onDoubleClick={() => {
                        window.open('https://github.com/Nfafshari', '_blank', 'noopener noreferrer');
                    }}
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
                    onDoubleClick={() => {
                        window.open('https://www.linkedin.com/in/nathen-afshari', '_blank', 'noopener noreferrer');
                    }}
                />
            </div>

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
            <Modal
                id='education-window'
                icon={ <Wintrust103 /> }
                title='Education'
                dragOptions={{
                    defaultPosition: { x: 140, y: 0 }
                }}
                titleBarOptions={[
                    <Modal.Minimize key='minimize' 
                        onClick={() => {
                            minimize('education-window');
                        }}
                    />,
                    <TitleBar.Close key='close' 
                        onClick={() => {
                            removeModal('education-window')
                        }}
                    />
                ]}
                
            >
                <Modal.Content w="500px" h="300px" boxShadow="$in" className="!p-0">
                    <EducationWindow />
                </Modal.Content>
            </Modal>
            <Modal
                id='projects-window'
                icon={ <Mdisp321 /> }
                title='Projects'
                dragOptions={{
                    defaultPosition: { x: 550, y: 100 }
                }}
                titleBarOptions={[
                    <Modal.Minimize key='minimize' 
                        onClick={() => {
                            minimize('projects-window');
                        }}
                    />,
                    <TitleBar.Close key='close' 
                        onClick={() => {
                            removeModal('projects-window')
                        }}
                    />
                ]}
                
            >
                <Modal.Content w="600px" h="500px" boxShadow="$in" className="!p-0">
                    <ProjectsWindow />
                </Modal.Content>
            </Modal>

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
