import React from 'react';

/**
 * TerminalWindow Component
 * Wrapper component for terminal-style UI elements
 */
interface TerminalWindowProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
    title,
    children,
    className = ''
}) => {
    return (
        <div className={`terminal-window ${className}`}>
            <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                {title && (
                    <span className="ml-2 text-xs font-mono text-secondary">{title}</span>
                )}
            </div>
            <div className="p-4 md:p-6">
                {children}
            </div>
        </div>
    );
};

export default TerminalWindow;
