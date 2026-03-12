export default interface ShortcutProps {
    icon: React.ReactNode;
    label: string;
    defaultPosition: { x: number, y: number },
    externalLink?: boolean
    onDoubleClick?: () => void;
}