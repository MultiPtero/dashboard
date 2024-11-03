'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
    const [serverStatus, setServerStatus] = useState < 'stopped' | 'running' | 'restarting' > ('running')

    // SVG icons as components
    const WifiIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
    )

    const ClockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )

    const CpuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
    )

    const MemoryIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 4v16" />
            <path d="M12 4v16" />
            <path d="M16 4v16" />
        </svg>
    )

    const DiskIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )

    const CloudIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
    )

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Demo server</h1>
                    <div className="flex gap-2">
                        <Button
                            onClick={() => setServerStatus('running')}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Start
                        </Button>
                        <Button
                            onClick={() => setServerStatus('restarting')}
                            variant="secondary"
                        >
                            Restart
                        </Button>
                        <Button
                            onClick={() => setServerStatus('stopped')}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Stop
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6">
                    <div className="bg-gray-800 rounded-lg p-4 min-h-[600px] relative">
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                            <input
                                type="text"
                                placeholder="Type a command..."
                                className="w-full bg-transparent outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Card className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <WifiIcon />
                                <div>
                                    <div className="text-sm text-gray-400">Address</div>
                                    <div className="text-gray-300">localhost:3000</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <ClockIcon />
                                <div>
                                    <div className="text-sm text-gray-400">Uptime</div>
                                    <div className="text-gray-300">6d 5h 22m</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <CpuIcon />
                                <div>
                                    <div className="text-sm text-gray-400">CPU Load</div>
                                    <div className="text-gray-300">0.07% / 100%</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <MemoryIcon />
                                <div>
                                    <div className="text-sm text-gray-400">Memory</div>
                                    <div className="text-gray-300">127.98 MB / 1 GB</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <DiskIcon />
                                <div>
                                    <div className="text-sm text-gray-400">Disk</div>
                                    <div className="text-gray-300">18.03 MB / 1 GB</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <CloudIcon />
                                <div>
                                    <div className="text-sm text-gray-400">Network (Inbound)</div>
                                    <div className="text-gray-300">423.59 KB</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <CloudIcon />
                                <div>
                                    <div className="text-sm text-gray-400">Network (Outbound)</div>
                                    <div className="text-gray-300">277.14 KB</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}