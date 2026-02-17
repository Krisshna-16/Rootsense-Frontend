"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, TreePine, AlertTriangle, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock Data for Map Regions
const mapRegions = [
    { id: "building-1", name: "Science Block", type: "academic", x: 20, y: 30, w: 25, h: 20, issues: 5, trees: 12 },
    { id: "building-2", name: "Library", type: "academic", x: 60, y: 25, w: 20, h: 15, issues: 2, trees: 8 },
    { id: "building-3", name: "Student Center", type: "social", x: 45, y: 55, w: 25, h: 20, issues: 8, trees: 5 },
    { id: "building-4", name: "Dorms North", type: "residential", x: 15, y: 70, w: 20, h: 20, issues: 12, trees: 15 },
    { id: "building-5", name: "Admin Block", type: "admin", x: 75, y: 65, w: 15, h: 15, issues: 1, trees: 6 },
]

// Mock Data for Heat Points
const heatPoints = [
    { id: 1, x: 25, y: 35, intensity: 0.8, type: "issue" }, // Science Block Issue
    { id: 2, x: 48, y: 60, intensity: 0.9, type: "issue" }, // Student Center Issue
    { id: 3, x: 20, y: 75, intensity: 1.0, type: "issue" }, // Dorms Issue (High)
    { id: 4, x: 80, y: 30, intensity: 0.4, type: "tree" },  // Near Library
    { id: 5, x: 50, y: 45, intensity: 0.6, type: "tree" },  // Central Quad
    { id: 6, x: 30, y: 85, intensity: 0.7, type: "tree" },  // Near Dorms
]

export function CampusHeatmap() {
    const [activeRegion, setActiveRegion] = useState<string | null>(null)

    return (
        <Card className="border-none bg-[#faf8f3] shadow-xl overflow-hidden">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-[#1a3a1a] flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-[#d4af37]" />
                            Campus Sustainability Heatmap
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                            Visualizing environmental hotspots and green zones
                        </CardDescription>
                    </div>
                    <div className="flex gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                            <span className="block h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-gray-600">Action Required</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="block h-3 w-3 rounded-full bg-[#2d5016]" />
                            <span className="text-gray-600">Green Zone</span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border-2 border-[#e8e6d9] bg-[#fdfbf7]">

                    {/* SVG Map Layer */}
                    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e8e6d9" strokeWidth="0.5" />
                            </pattern>
                            <pattern id="grass" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="#2d5016" opacity="0.1" />
                            </pattern>
                        </defs>

                        {/* Background Texture */}
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Paths/Roads */}
                        <path
                            d="M 10 50 Q 50 40 90 50"
                            fill="none"
                            stroke="#e8e6d9"
                            strokeWidth="20"
                            strokeLinecap="round"
                        />
                        <path
                            d="M 50 10 V 90"
                            fill="none"
                            stroke="#e8e6d9"
                            strokeWidth="15"
                            strokeLinecap="round"
                        />

                        {/* Green Areas */}
                        <circle cx="20%" cy="80%" r="15%" fill="url(#grass)" />
                        <circle cx="80%" cy="20%" r="12%" fill="url(#grass)" />

                        {/* Buildings (Abstract) */}
                        {mapRegions.map((region) => (
                            <g key={region.id}>
                                {/* Building Shadow */}
                                <rect
                                    x={`${region.x + 1}%`}
                                    y={`${region.y + 1}%`}
                                    width={`${region.w}%`}
                                    height={`${region.h}%`}
                                    fill="#d4af37"
                                    opacity="0.2"
                                    rx="4"
                                />
                                {/* Building Body */}
                                <rect
                                    x={`${region.x}%`}
                                    y={`${region.y}%`}
                                    width={`${region.w}%`}
                                    height={`${region.h}%`}
                                    fill="#ffffff"
                                    stroke="#2d5016"
                                    strokeWidth="2"
                                    rx="4"
                                    className="transition-all duration-300 hover:fill-[#faf8f3] cursor-pointer"
                                    onMouseEnter={() => setActiveRegion(region.id)}
                                    onMouseLeave={() => setActiveRegion(null)}
                                />
                                {/* Building Label */}
                                <text
                                    x={`${region.x + region.w / 2}%`}
                                    y={`${region.y + region.h / 2}%`}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="text-[10px] font-medium fill-[#2d5016] pointer-events-none"
                                    style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}
                                >
                                    {region.name.toUpperCase()}
                                </text>
                            </g>
                        ))}
                    </svg>

                    {/* Interactive Heat Layer */}
                    {heatPoints.map((point) => (
                        <div
                            key={point.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${point.x}%`, top: `${point.y}%` }}
                        >
                            <div
                                className={`rounded-full blur-md ${point.type === 'issue'
                                        ? 'bg-red-500/40'
                                        : 'bg-green-500/30'
                                    }`}
                                style={{
                                    width: `${point.intensity * 60}px`,
                                    height: `${point.intensity * 60}px`,
                                }}
                            />
                            <div
                                className={`absolute inset-0 m-auto rounded-full ${point.type === 'issue'
                                        ? 'bg-red-500 animate-pulse'
                                        : 'bg-[#2d5016]'
                                    }`}
                                style={{ width: '8px', height: '8px' }}
                            />
                        </div>
                    ))}

                    {/* Region Tooltips */}
                    {mapRegions.map((region) => (
                        <div
                            key={`tooltip-${region.id}`}
                            className="absolute cursor-pointer"
                            style={{
                                left: `${region.x}%`,
                                top: `${region.y}%`,
                                width: `${region.w}%`,
                                height: `${region.h}%`
                            }}
                            onMouseEnter={() => setActiveRegion(region.id)}
                            onMouseLeave={() => setActiveRegion(null)}
                        >
                            {activeRegion === region.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -top-24 left-1/2 -translate-x-1/2 z-10 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-[#d4af37] w-48 text-center"
                                >
                                    <h4 className="font-bold text-[#1a3a1a] text-sm mb-1">{region.name}</h4>
                                    <div className="flex justify-center gap-3 text-xs">
                                        <div className="flex items-col flex-col">
                                            <span className="font-bold text-red-600">{region.issues}</span>
                                            <span className="text-gray-500 scale-90">Issues</span>
                                        </div>
                                        <div className="w-px bg-gray-200"></div>
                                        <div className="flex items-col flex-col">
                                            <span className="font-bold text-[#2d5016]">{region.trees}</span>
                                            <span className="text-gray-500 scale-90">Trees</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-500 to-red-500"
                                            style={{ width: `${(region.issues / (region.issues + region.trees)) * 100}%` }}
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-1">Health Index</p>
                                </motion.div>
                            )}
                        </div>
                    ))}

                </div>
            </CardContent>
        </Card>
    )
}
