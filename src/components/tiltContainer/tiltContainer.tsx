import { useEffect, useRef } from 'react';

import tiltContainerProps from './tiltContainer.types';
import './tiltContainer.css';

export default function TiltContainer(props: tiltContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    let animationFrame: number | null = null;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;

        function handleMouseMove(e: MouseEvent) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Target rotation values based on mouse pos
            targetY = (x - centerX) / (props.constraint ?? 20);
            targetX = -(y - centerY) / (props.constraint ?? 20);

            if (!animationFrame) animate();
        }

        function animate() {
            // Smooth easing interpolation toward target
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;

            container.style.transform = `
                perspective(${props.perspective ?? 800}px)
                rotateX(${currentX}deg)
                rotateY(${currentY}deg)
                scale3d(1.01, 1.01, 1.01)
            `;

            // Optional shadow effect
            if (props.shadow !== false) {
                container.style.filter = `
                    drop-shadow(${-currentY * 2}px ${currentX * 2}px 12px rgba(0,0,0,0.2))
                `;
            }

            animationFrame = requestAnimationFrame(animate);
        }

        function handleMouseLeave() {
            cancelAnimationFrame(animationFrame!);
            animationFrame = null;

            container.style.transform = `
                perspective(${props.perspective ?? 800}px)
                rotateX(0deg)
                rotateY(0deg)
                scale3d(1,1,1)
            `;

            if (props.shadow !== false) {
                container.style.filter = `drop-shadow(0px 0px 4px rgba(0,0,0,0.15))`;
            }
        }

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [props.constraint, props.perspective, props.shadow]);

    return (
        <div
            ref={containerRef}
            className={`transition-transform duration-200 will-change-transform ${props.className ?? ""}`}
        >
            {props.children}
        </div>
    );
}
