import { Frame } from '@react95/core/Frame';

export default function EducationWindow () {
    return (
        <>
            <div className='h-[200px] w-[100%] flex justify-center items-center'>
                <Frame
                    className='bg-amber-100 text-center flex flex-col align-middle justify-center'
                    h='175px' 
                    w='325px' 
                    boxShadow={'$in'}
                    padding='2px'
                >
                    <h2 className='text-xl'>BACHELOR'S DEGREE IN PROGRESS...</h2>
                    <p className='mt-2 font-bold'> Graduation date: May 16th, 2026</p>
                </Frame>
            </div>
            <hr/>
            <div className='h-[80px] w-[100%] text-center mt-1'>
                <p className='font-mono'><span className='font-bold text-sm'>GPA:</span> 3.75</p>
                <p className='font-mono'><span className='font-bold text-sm'>Campus:</span> University of North Dakota</p>
                <p className='font-mono'><span className='font-bold text-sm'>Awards:</span> Deans List (2022-2026), Academic Achievement Scholarship (2022-2026) </p>
            </div>
        </>
    );
}