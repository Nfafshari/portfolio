import { useState } from 'react';
import { Frame } from '@react95/core/Frame';
import { TitleBar } from '@react95/core/TitleBar';
import { Progman44, Progman45 } from '@react95/icons';

import ExperienceWindowProps from './experienceWindow.types';
import './experienceWindow.css';

export default function ExperienceWindow (props: ExperienceWindowProps) {
    const [pageNum, setPageNum] = useState<'1' | '2'>('1');

    function closeWindow () {
        props.setShowWindow(false);
    }

    function minimizeWindow () {

    }

    if (props.showWindow) {
        return (
            <Frame
                h='600px' 
                w='700px' 
                bgColor='$material'
                boxShadow={props.activeWindow ? '$out' : '$in'}
                padding='2px'
            >
                <TitleBar 
                    title='Experience'
                    id='Experience-titlebar'
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
                
                
            </Frame>
        );
    }
}