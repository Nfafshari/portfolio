import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { Shortcut as ShortcutIcon } from "@react95/icons";
import ShortcutProps from "./shortcut.types";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Shortcut ({
    id,
    icon,
    label,
    defaultPosition,
    externalLink = false,
    onDoubleClick,
    onRecycleAttempt
}: ShortcutProps) {
    const [isDragging, setIsDragging] = useState(false);
    // Controlled position so we can snap the icon back to where it started
    // when it gets dropped on the Recycle Bin.
    const [position, setPosition] = useState(defaultPosition);
    const shortcutRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    // Touch devices suppress the synthetic click/doubleClick that react-draggable
    // would otherwise pass through, so we detect a "tap" inside onStop instead:
    // a press-and-release that didn't move counts as an open gesture on mobile.
    const dragStart = useRef({ x: 0, y: 0 });

    const isOverRecycleBin = () => {
        const el = shortcutRef.current;
        const bin = document.getElementById('recycle-bin');
        if (!el || !bin) return false;
        const a = el.getBoundingClientRect();
        const b = bin.getBoundingClientRect();
        return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
    };

    return (
        <Draggable
            nodeRef={shortcutRef}
            bounds='parent'
            position={position}
            onStart={(_e, data) => {
                dragStart.current = { x: data.x, y: data.y };
                setIsDragging(true)
            }}
            onDrag={(_e, data) => {
                setPosition({ x: data.x, y: data.y });
            }}
            onStop={(_e, data) => {
                setIsDragging(false)
                const movedDistance = Math.hypot(data.x - dragStart.current.x, data.y - dragStart.current.y);
                if (isMobile && movedDistance < 6) {
                    onDoubleClick?.();
                }
                // Dropping a different shortcut onto the Recycle Bin is a trap:
                // taunt the user and snap the icon back to its starting spot.
                if (id !== 'recycle-bin' && movedDistance >= 6 && isOverRecycleBin()) {
                    onRecycleAttempt?.();
                    setPosition(defaultPosition);
                } else {
                    setPosition({ x: data.x, y: data.y });
                }
            }}
        >
            <div
                id={id}
                ref={shortcutRef}
                className={`absolute h-20 w-20 m-1 rounded-md hover:bg-sky-300/50 hover:border-2 hover:border-sky-500/50 ${isDragging ? 'z-50 cursor-grab' : ''}`}
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