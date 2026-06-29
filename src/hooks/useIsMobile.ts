import { useEffect, useState } from 'react';

/**
 * Returns true when the viewport is at or below `breakpoint` (px).
 * Used to swap the fixed-size desktop window layout for a viewport-fitting
 * mobile layout, since the Win95 modals are sized/positioned in pixels.
 */
export function useIsMobile(breakpoint = 768): boolean {
    const query = `(max-width: ${breakpoint}px)`;
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.matchMedia(query).matches : false
    );

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        setIsMobile(mql.matches);
        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    }, [query]);

    return isMobile;
}
