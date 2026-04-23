import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import "./reveal.css";

type RevealProps = {
    children: ReactNode;
    delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
    const { ref, isVisible } = useReveal();

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? "active" : ""}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}