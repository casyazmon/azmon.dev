"use client"
import React from 'react';

/**
 * SystemStatus Component
 * Terminal-style status bar showing availability, location, and response time
 */
const SystemStatus: React.FC = () => {
    return (
        <div className="bg-surface border-y border-border py-3 px-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm font-mono text-secondary">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-label="Online status" />
                        <span className="text-foreground">ONLINE</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-border" />
                    <div>Toronto, CA (EST)</div>
                    <div className="hidden md:block w-px h-4 bg-border" />
                    <div>Full-Stack Engineer</div>
                    <div className="hidden md:block w-px h-4 bg-border" />
                    <div>Response: &lt;24h</div>
                </div>
            </div>
        </div>
    );
};

export default SystemStatus;
