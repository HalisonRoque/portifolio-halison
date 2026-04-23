import { useEffect, useRef, useState } from "react";

type UseRevealReturn = {
    ref: React.RefObject<HTMLDivElement | null>;
    isVisible: boolean;
};

export function useReveal(): UseRevealReturn {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;

        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(currentRef);
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(currentRef);

        return () => {
            observer.disconnect();
        };
    }, []);

    return { ref, isVisible };
}