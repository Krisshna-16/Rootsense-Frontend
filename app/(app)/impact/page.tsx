"use client"

import { TreePine, Droplets, CheckCircle2, Trophy, Medal, Award, TrendingUp, Zap, Wind, Recycle, Calculator, Info, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Mock data for resolved issues with impact calculations
const resolvedIssuesData = [
  { id: 1, type: "Water", description: "Fixed leaking tap in Admin Block", waterSaved: 1825, co2Reduced: 0.5, resolvedDate: "2026-01-27" },
  { id: 2, type: "Water", description: "Repaired broken pipe in Central Garden", waterSaved: 3650, co2Reduced: 1.0, resolvedDate: "2026-01-25" },
  { id: 3, type: "Irrigation", description: "Fixed sprinkler system malfunction", waterSaved: 2190, co2Reduced: 0.6, resolvedDate: "2026-01-22" },
  { id: 4, type: "Lighting", description: "Replaced 3 street lights with solar", waterSaved: 0, co2Reduced: 45.0, energySaved: 1200, resolvedDate: "2026-01-28" },
  { id: 5, type: "Waste", description: "E-waste properly recycled (25kg)", waterSaved: 0, co2Reduced: 12.5, wasteRecycled: 25, resolvedDate: "2026-01-25" },
  { id: 6, type: "Pollution", description: "Stopped leaf burning, composting started", waterSaved: 0, co2Reduced: 8.2, resolvedDate: "2026-01-24" },
  { id: 7, type: "Drainage", description: "Rainwater harvesting pit restored", waterSaved: 5000, co2Reduced: 1.4, resolvedDate: "2026-01-23" },
  { id: 8, type: "Water", description: "Water cooler leak fixed", waterSaved: 730, co2Reduced: 0.2, resolvedDate: "2026-01-25" },
  { id: 9, type: "Irrigation", description: "Drip irrigation installed (saves 40%)", waterSaved: 4380, co2Reduced: 1.2, resolvedDate: "2026-01-20" },
  { id: 10, type: "Waste", description: "Organic waste composting bin added", waterSaved: 0, co2Reduced: 15.0, wasteRecycled: 150, resolvedDate: "2026-01-18" },
]

// Calculate totals from resolved issues
const impactTotals = {
  waterSaved: resolvedIssuesData.reduce((sum, issue) => sum + (issue.waterSaved || 0), 0),
  co2Reduced: resolvedIssuesData.reduce((sum, issue) => sum + (issue.co2Reduced || 0), 0),
  energySaved: resolvedIssuesData.reduce((sum, issue) => sum + (issue.energySaved || 0), 0),
  wasteRecycled: resolvedIssuesData.reduce((sum, issue) => sum + (issue.wasteRecycled || 0), 0),
  issuesResolved: resolvedIssuesData.length,
}

// Mock data for leaderboard - comprehensive department and hostel rankings
const leaderboardData = [
  { rank: 1, name: "Computer Science Dept.", score: 95, trees: 156, issues: 42, waterSaved: "3,420L", volunteers: 28 },
  { rank: 2, name: "Mechanical Engineering", score: 92, trees: 142, issues: 38, waterSaved: "2,890L", volunteers: 24 },
  { rank: 3, name: "Electrical Engineering", score: 88, trees: 128, issues: 35, waterSaved: "2,650L", volunteers: 22 },
  { rank: 4, name: "Civil Engineering", score: 85, trees: 118, issues: 31, waterSaved: "2,340L", volunteers: 19 },
  { rank: 5, name: "Hostel A (Boys)", score: 82, trees: 96, issues: 28, waterSaved: "1,980L", volunteers: 45 },
  { rank: 6, name: "Hostel B (Girls)", score: 79, trees: 88, issues: 26, waterSaved: "1,750L", volunteers: 52 },
  { rank: 7, name: "Chemical Engineering", score: 77, trees: 82, issues: 22, waterSaved: "1,620L", volunteers: 16 },
  { rank: 8, name: "Biotechnology Dept.", score: 76, trees: 78, issues: 20, waterSaved: "1,540L", volunteers: 14 },
  { rank: 9, name: "Admin & Staff Block", score: 74, trees: 72, issues: 18, waterSaved: "1,380L", volunteers: 12 },
  { rank: 10, name: "Library & Archives", score: 72, trees: 64, issues: 15, waterSaved: "1,120L", volunteers: 8 },
  { rank: 11, name: "Hostel C (PG)", score: 70, trees: 58, issues: 14, waterSaved: "980L", volunteers: 22 },
  { rank: 12, name: "Sports Department", score: 68, trees: 52, issues: 12, waterSaved: "850L", volunteers: 18 },
]

const rankIcons = {
  1: Trophy,
  2: Medal,
  3: Award,
}

const rankColors = {
  1: "text-yellow-500",
  2: "text-gray-400",
  3: "text-amber-600",
}

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f3] via-white to-[#f5f5dc]">
      {/* Hero Banner */}
      <section
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: 'url(/green-mountains.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a1a]/90 to-[#2d5016]/80" />
        <div className="relative h-full flex flex-col justify-center px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Campus Impact Dashboard
          </h1>
          <p className="text-[#e8e6d9] text-lg mb-4 max-w-2xl">
            Measuring our environmental footprint and celebrating sustainability achievements
          </p>
          <div className="flex flex-wrap gap-6 text-white">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <TreePine className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-[#e8e6d9]">Trees Monitored</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Droplets className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">24.5K</p>
                <p className="text-xs text-[#e8e6d9]">Liters Saved</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Wind className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">{impactTotals.co2Reduced.toFixed(1)}kg</p>
                <p className="text-xs text-[#e8e6d9]">CO2 Reduced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 sm:p-6 lg:p-8">

        {/* Estimated Impact Summary */}
        <Card className="mb-8 border-none bg-gradient-to-r from-[#2d5016]/5 to-white shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-[#2d5016]" />
              <CardTitle className="text-[#1a3a1a]">Estimated Impact from Resolved Issues</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Real-time projections calculated from {impactTotals.issuesResolved} resolved civic issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Water Saved */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                    <Droplets className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Water Saved</p>
                    <p className="text-xl font-bold text-blue-600">{impactTotals.waterSaved.toLocaleString()}L</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  From fixing {resolvedIssuesData.filter(i => i.waterSaved > 0).length} water-related issues
                </p>
              </div>

              {/* CO2 Reduced */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d5016]/10">
                    <Wind className="h-5 w-5 text-[#2d5016]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">CO2 Reduced</p>
                    <p className="text-xl font-bold text-[#2d5016]">{impactTotals.co2Reduced.toFixed(1)} kg</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  Equivalent to planting {Math.round(impactTotals.co2Reduced / 21)} trees
                </p>
              </div>

              {/* Energy Saved */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/10">
                    <Zap className="h-5 w-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Energy Saved</p>
                    <p className="text-xl font-bold text-[#d4af37]">{impactTotals.energySaved.toLocaleString()} kWh</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  From solar lighting upgrades
                </p>
              </div>

              {/* Waste Recycled */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                    <Recycle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Waste Recycled</p>
                    <p className="text-xl font-bold text-green-600">{impactTotals.wasteRecycled} kg</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  E-waste and organic materials
                </p>
              </div>
            </div>

            {/* Recent Impact Contributions */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-medium text-[#1a3a1a]">Recent Resolved Issues Contributing to Impact</h4>
              <div className="space-y-2">
                {resolvedIssuesData.slice(0, 5).map((issue) => (
                  <div key={issue.id} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm transition-all hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#2d5016]" />
                      <span className="text-[#1a3a1a]">{issue.description}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      {issue.waterSaved > 0 && (
                        <span className="flex items-center gap-1">
                          <Droplets className="h-3 w-3 text-blue-600" />
                          {issue.waterSaved.toLocaleString()}L
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Wind className="h-3 w-3 text-[#2d5016]" />
                        {issue.co2Reduced}kg CO2
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Colorful Feature Cards - Inspired by Reference */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Tree Survival - Green Gradient */}
          <Card className="border-none shadow-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl relative min-h-[240px]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-700 opacity-95 group-hover:opacity-100 transition-opacity" />
            <CardContent className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <TreePine className="h-12 w-12 mb-3 opacity-90" />
                <h3 className="text-lg font-semibold mb-1">Tree Survival</h3>
                <p className="text-sm opacity-90">Campus Wide</p>
              </div>
              <div className="mt-4">
                <p className="text-5xl font-bold mb-2">89%</p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +3% this month
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Water Conservation - Blue Gradient */}
          <Card className="border-none shadow-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl relative min-h-[240px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-700 opacity-95 group-hover:opacity-100 transition-opacity" />
            <CardContent className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <Droplets className="h-12 w-12 mb-3 opacity-90" />
                <h3 className="text-lg font-semibold mb-1">Water Saved</h3>
                <p className="text-sm opacity-90">This Year</p>
              </div>
              <div className="mt-4">
                <p className="text-5xl font-bold mb-2">24.5K</p>
                <p className="text-sm opacity-90">Liters conserved</p>
              </div>
            </CardContent>
          </Card>

          {/* Issue Resolution - Purple Gradient */}
          <Card className="border-none shadow-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl relative min-h-[240px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-700 opacity-95 group-hover:opacity-100 transition-opacity" />
            <CardContent className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <CheckCircle2 className="h-12 w-12 mb-3 opacity-90" />
                <h3 className="text-lg font-semibold mb-1">Issues Resolved</h3>
                <p className="text-sm opacity-90">Civic Actions</p>
              </div>
              <div className="mt-4">
                <p className="text-5xl font-bold mb-2">156</p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +12 this week
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Green Score - Gold Gradient */}
          <Card className="border-none shadow-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl relative min-h-[240px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 opacity-95 group-hover:opacity-100 transition-opacity" />
            <CardContent className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <Trophy className="h-12 w-12 mb-3 opacity-90" />
                <h3 className="text-lg font-semibold mb-1">Green Score</h3>
                <p className="text-sm opacity-90">Overall Rating</p>
              </div>
              <div className="mt-4">
                <p className="text-5xl font-bold mb-2">87</p>
                <p className="text-sm opacity-90">Excellent status</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overall Green Score */}
        <Card className="mb-8 border-none bg-white shadow-lg">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-[#1a3a1a]">Campus Green Score</CardTitle>
                <CardDescription className="text-gray-600">Overall sustainability rating based on all metrics</CardDescription>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="rounded-full p-1 text-gray-600 hover:bg-gray-100 hover:text-[#1a3a1a]">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">How is this calculated?</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="max-w-xs">
                    <p className="text-sm">
                      <strong>Green Score = </strong>
                      Tree Health (30%) + Water Conservation (25%) + Issue Response (25%) + Community Engagement (20%)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-12">
              <div className="text-center">
                <div className="relative mx-auto mb-4 flex h-32 w-32 items-center justify-center">
                  <svg className="h-32 w-32 -rotate-90 transform">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={351.86}
                      strokeDashoffset={351.86 * (1 - 0.87)}
                      strokeLinecap="round"
                      className="text-[#2d5016]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-[#2d5016]">87</span>
                    <span className="text-sm text-gray-600">/100</span>
                  </div>
                </div>
                <Badge className="bg-[#2d5016] text-white">Excellent</Badge>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-600">Tree Health</span>
                    <span className="font-medium text-[#1a3a1a]">89/100</span>
                  </div>
                  <Progress value={89} className="h-2 bg-gray-200" />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-600">Water Conservation</span>
                    <span className="font-medium text-[#1a3a1a]">85/100</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200" />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-600">Issue Response</span>
                    <span className="font-medium text-[#1a3a1a]">78/100</span>
                  </div>
                  <Progress value={78} className="h-2 bg-gray-200" />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-600">Community Engagement</span>
                    <span className="font-medium text-[#1a3a1a]">92/100</span>
                  </div>
                  <Progress value={92} className="h-2 bg-gray-200" />
                  <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] text-gray-600">
                    <span className="flex items-center gap-1"><CheckCircle2 className="h-2.5 w-2.5 text-[#2d5016]" /> Public Health: +12%</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="h-2.5 w-2.5 text-[#2d5016]" /> Property Value: +$2.4M</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="h-2.5 w-2.5 text-[#2d5016]" /> Social Equity: High</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="h-2.5 w-2.5 text-[#2d5016]" /> Event Participation: 84%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements & Badges (NEW) */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">

          <Card className="border-none bg-white shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <CardTitle className="text-[#1a3a1a]">Sustainabilty Milestones</CardTitle>
              </div>
              <CardDescription className="text-gray-600">Major campus-wide achievements reached</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gradient-to-r from-yellow-50 to-white p-3 transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">
                  <Medal className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-[#1a3a1a] font-mono">1K TREES MILESTONE</p>
                  <p className="text-xs text-gray-600 text-balance">Campus reached 1,000+ monitored trees. Status: COMPLETED</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gradient-to-r from-blue-50 to-white p-3 transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <Droplets className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-[#1a3a1a] font-mono">WATER SAVER PRO</p>
                  <p className="text-xs text-gray-600 text-balance">Saved 10,000L through leak reporting. Status: COMPLETED</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border-2 border-[#2d5016]/30 bg-gradient-to-r from-[#2d5016]/5 to-white p-3 animate-pulse">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2d5016]/10 text-[#2d5016]">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-[#2d5016] font-mono">ZERO WASTE CHALLENGE</p>
                  <p className="text-xs text-gray-600 text-balance">Ongoing monthly goal: Reduce waste by 15%. Status: IN PROGRESS (82%)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-white shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-[#d4af37]" />
                <CardTitle className="text-[#1a3a1a]">Top Volunteer Badges</CardTitle>
              </div>
              <CardDescription className="text-gray-600">Recognition for outstanding contributors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-3 text-center transition-all bg-white border-2 border-[#2d5016]/30 rounded-xl hover:border-[#2d5016] hover:shadow-lg group">
                  <div className="mb-2 p-3 bg-[#2d5016]/10 rounded-full group-hover:scale-110 transition-transform">
                    <TreePine className="h-6 w-6 text-[#2d5016]" />
                  </div>
                  <p className="text-xs font-bold font-mono text-[#1a3a1a]">TREE GUARDIAN</p>
                  <p className="text-[10px] text-gray-600 mt-1">Adopted & maintained 5+ trees</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 text-center transition-all bg-white border-2 border-[#d4af37]/30 rounded-xl hover:border-[#d4af37] hover:shadow-lg group">
                  <div className="mb-2 p-3 bg-[#d4af37]/10 rounded-full group-hover:scale-110 transition-transform">
                    <AlertTriangle className="h-6 w-6 text-[#d4af37]" />
                  </div>
                  <p className="text-xs font-bold font-mono text-[#1a3a1a]">ISSUE SOLVER</p>
                  <p className="text-[10px] text-gray-600 mt-1">Reported 10+ civic issues</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 text-center transition-all bg-white border-2 border-gray-200 rounded-xl opacity-50 grayscale">
                  <div className="mb-2 p-3 bg-blue-500/10 rounded-full">
                    <Wind className="h-6 w-6 text-blue-500" />
                  </div>
                  <p className="text-xs font-bold font-mono text-gray-600">AIR PURIFIER</p>
                  <p className="text-[10px] text-gray-600 mt-1">LOCKED: Reduce campus AQI by 5%</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 text-center transition-all bg-white border-2 border-gray-200 rounded-xl opacity-50 grayscale">
                  <div className="mb-2 p-3 bg-yellow-500/10 rounded-full">
                    <Award className="h-6 w-6 text-yellow-500" />
                  </div>
                  <p className="text-xs font-bold font-mono text-gray-600">LEADERSHIP GOLD</p>
                  <p className="text-[10px] text-gray-600 mt-1">LOCKED: Lead a department to #1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card className="border-none bg-white shadow-lg">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-[#1a3a1a]">Department & Hostel Leaderboard</CardTitle>
                <CardDescription className="text-gray-600">Rankings based on sustainability contributions</CardDescription>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="rounded-full p-1 text-gray-600 hover:bg-gray-100 hover:text-[#1a3a1a]">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">How are rankings calculated?</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="max-w-xs">
                    <p className="text-sm">
                      <strong>Ranking factors: </strong>
                      Trees monitored (40 pts), Issues reported and resolved (30 pts), Active volunteers (20 pts), Water saved (10 pts)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-sm text-gray-600">
                    <th className="pb-3 pr-4 font-medium">Rank</th>
                    <th className="pb-3 pr-4 font-medium">Department/Hostel</th>
                    <th className="pb-3 pr-4 font-medium text-right">Score</th>
                    <th className="hidden pb-3 pr-4 font-medium text-right sm:table-cell">Trees</th>
                    <th className="hidden pb-3 pr-4 font-medium text-right md:table-cell">Issues</th>
                    <th className="pb-3 font-medium text-right">Volunteers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leaderboardData.map((entry) => {
                    const RankIcon = rankIcons[entry.rank as keyof typeof rankIcons]
                    const rankColor = rankColors[entry.rank as keyof typeof rankColors]
                    return (
                      <tr
                        key={entry.rank}
                        className={`text-sm transition-all hover:bg-gray-50 ${entry.rank <= 3 ? "bg-gradient-to-r from-[#d4af37]/5 to-transparent" : ""}`}
                      >
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            {RankIcon ? (
                              <RankIcon className={`h-5 w-5 ${rankColor}`} />
                            ) : (
                              <span className="flex h-5 w-5 items-center justify-center text-gray-600">
                                {entry.rank}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 pr-4 font-medium text-[#1a3a1a]">{entry.name}</td>
                        <td className="py-3 pr-4 text-right">
                          <span className={`font-semibold ${entry.rank <= 3 ? "text-[#d4af37]" : "text-[#1a3a1a]"}`}>
                            {entry.score}
                          </span>
                        </td>
                        <td className="hidden py-3 pr-4 text-right text-gray-600 sm:table-cell">{entry.trees}</td>
                        <td className="hidden py-3 pr-4 text-right text-gray-600 md:table-cell">{entry.issues}</td>
                        <td className="py-3 text-right text-gray-600">{entry.volunteers}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
