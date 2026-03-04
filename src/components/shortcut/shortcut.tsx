import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { Shortcut as ShortcutIcon } from "@react95/icons";
import ShortcutProps from "./shortcut.types";

export default function Shortcut ({
    icon,
    label,
    defaultPosition,
    externalLink = false,
    onDoubleClick
}: ShortcutProps) {
    const [isDragging, setIsDragging] = useState(false);
    const shortcutRef = useRef(null);

    return ( 
        <Draggable 
            nodeRef={shortcutRef}
            bounds='parent'
            defaultPosition={{
                x: defaultPosition.x, 
                y: defaultPosition.y
            }}
            onStart={() => {
                setIsDragging(true)
            }}
            onStop={() => {
                setIsDragging(false)
            }}
        >
            <div 
                ref={shortcutRef}
                className={`absolute h-20 w-20 m-1 ${isDragging ? 'z-50' : ''}`}
                onDoubleClick={onDoubleClick}
            >
                <div
                    className='flex flex-col w-full h-full items-center justify-center text-center cursor-pointer'
                >
                    {externalLink ? (
                        <div className="flex">
                            {icon}
                            <div className="absolute">
                                <ShortcutIcon/>
                            </div>
                        </div>
                    ) : (
                        icon
                    )}
                    <p className='mt-1'> {label} </p>
                </div>
            </div>
        </Draggable>
    );
}