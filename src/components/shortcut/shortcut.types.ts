export default interface ShortcutProps {
    id?: string;
    icon: React.ReactNode;
    label: string;
    defaultPosition: { x: number, y: number },
    externalLink?: boolean
    onDoubleClick?: () => void;
    /** Called when this shortcut is dropped on top of the Recycle Bin. */
    onRecycleAttempt?: () => void;
}