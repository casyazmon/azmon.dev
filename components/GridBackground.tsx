import React from 'react';

/**
 * GridBackground Component
 * Provides a subtle grid overlay for technical/backend aesthetic
 */
const GridBackground: React.FC<{ className?: string; pulse?: boolean }> = ({
    className = '',
    pulse = false
}) => {
    return (
        <div
            className={`absolute inset-0 -z-10 grid-background ${pulse ? 'grid-pulse' : ''} ${className}`}
            aria-hidden="true"
        />
    );
};

export default GridBackground;
