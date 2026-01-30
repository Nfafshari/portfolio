import { Frame } from '@react95/core/Frame';
import { TitleBar } from '@react95/core/TitleBar';

import EducationWindowProps from './educationWindow.types';
import './educationWindow.css';

export default function EducationWindow (props: EducationWindowProps) {
    function closeWindow () {
        props.setShowWindow(false);
    }

    function minimizeWindow () {

    }

    if (props.showWindow) {
        return (
            <Frame
                h='325px' 
                w='500px' 
                bgColor='$material'
                boxShadow={props.activeWindow ? '$out' : '$in'}
                padding='2px'
            >
                <TitleBar 
                    title='Education'
                    id='Education-titlebar'
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
                
                <div className='h-[200px] w-[100%] flex justify-center items-center'>
                    <Frame
                        className='bg-amber-100 text-center'
                        h='175px' 
                        w='325px' 
                        boxShadow={'$in'}
                        padding='2px'
                    >
                        <h2 className='EducationWindow-h2 pt-10'>BACHELOR'S DEGREE IN PROGRESS...</h2>
                        <p className='EducationWindow-p mt-2 font-bold'> Graduation date: May 16th, 2026</p>
                    </Frame>
                </div>
                <hr/>
                <div className='h-[80px] w-[100%] text-center mt-1'>
                    <p className='EducationWindow-p'><span className='font-bold'>GPA:</span> 3.75</p>
                    <p className='EducationWindow-p'><span className='font-bold'>Campus:</span> University of North Dakota</p>
                    <p className='EducationWindow-p'><span className='font-bold'>Awards:</span> Deans List (2022-2026), Academic Achievement Scholarship (2022-2026) </p>
                </div>
            </Frame>
        );
    }
}