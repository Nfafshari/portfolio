import { Frame } from '@react95/core/Frame';
import diplomaImg from '../../assets/diploma.png';

export default function EducationWindow () {
    return (
        <div className='p-2 overflow-y-auto h-full'>
            <div className='text-center'>
                <h2 className='text-lg font-bold font-mono'>Bachelor of Science in Computer Science</h2>
                <p className='font-mono text-sm'>University of North Dakota &mdash; <span className='font-bold'>Magna Cum Laude</span></p>
                <p className='font-mono text-sm'>Graduated May 16th, 2026</p>
            </div>

            <Frame boxShadow='$in' bgColor='white' className='mt-2 p-1 flex justify-center'>
                <img
                    src={diplomaImg}
                    alt='University of North Dakota Bachelor of Science in Computer Science diploma'
                    className='w-full h-auto max-w-[460px]'
                />
            </Frame>

            <hr className='my-2'/>
            <div className='text-center font-mono'>
                <p><span className='font-bold text-sm'>GPA:</span> 3.76</p>
                <p><span className='font-bold text-sm'>Campus:</span> University of North Dakota</p>
                <p><span className='font-bold text-sm'>Awards:</span> Dean's List & Academic Achievement Scholarship (2022&ndash;2026)</p>
            </div>
        </div>
    );
}
