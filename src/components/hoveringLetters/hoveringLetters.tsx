import HoveringLettersProps from './hoveringLetters.types';
import './hoveringLetters.css';

export default function HoveringLetters (props: HoveringLettersProps) {
    const textClass = props.textSize;

    return (
        <div className={`flex p-5 pl-0 ${textClass} text-slate-600 justify-center`}>
            {props.text.split('').map((letter: string, index) => (
                <span className={`hover:-translate-y-2 select-none cursor-default`} id={`${letter}-${index}`}>
                    {letter}
                </span>
            ))}
        </div>
    );
}
