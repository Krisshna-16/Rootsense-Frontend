"use client";
import React, { useState, useEffect } from "react";
import { CivicIssue } from "@/lib/mock-data"

import {
    Users,
    Shield,
    CheckCircle,
    AlertCircle,
    Settings,
    Activity,
    ArrowUpRight,
    MoreHorizontal,
    Search,
    Filter,
    Download,
    Trash2,
    Check,
    X,
    Megaphone,
    History,
    FileText,
    Key,
    UserMinus,
    UserPlus,
    TrendingUp,
    TrendingDown,
    Server,
    Globe,
    MapPin
} from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis, Cell, PieChart, Pie } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

// Mock data for admin dashboard
// Mock data for analytics
const registrationData = [
    { month: "Sep", users: 120 },
    { month: "Oct", users: 340 },
    { month: "Nov", users: 560 },
    { month: "Dec", users: 890 },
    { month: "Jan", users: 1100 },
    { month: "Feb", users: 1247 },
]

const issueTrends = [
    { category: "Water", resolved: 45, open: 12 },
    { category: "Trees", resolved: 32, open: 8 },
    { category: "Waste", resolved: 28, open: 5 },
    { category: "Energy", resolved: 15, open: 4 },
    { category: "Other", resolved: 10, open: 2 },
]



const auditLogs = [
    { id: 1, action: "User Role Updated", target: "Sara Khan", admin: "SuperAdmin", time: "10 mins ago" },
    { id: 2, action: "Tree Approved", target: "Banyan #422", admin: "Rohan Gupta", time: "45 mins ago" },
    { id: 3, action: "System Config Changed", target: "AI Model: Gemini 1.5", admin: "SuperAdmin", time: "2 hours ago" },
    { id: 4, action: "Broadcast Sent", target: "Campus Cleanup Event", admin: "Moderator_A", time: "5 hours ago" },
]

const chartConfig = {
    users: { label: "New Users", color: "var(--chart-1)" },
    resolved: { label: "Resolved", color: "var(--primary)" },
    open: { label: "Open Issues", color: "var(--destructive)" },
}

const recentUsers = [
    { id: 1, name: "Arjun Mehta", email: "arjun.m@university.edu", role: "User", status: "Active", joined: "2 hours ago" },
    { id: 2, name: "Sara Khan", email: "s.khan@university.edu", role: "Moderator", status: "Active", joined: "5 hours ago" },
    { id: 3, name: "Vikram Singh", email: "v.singh@university.edu", role: "User", status: "Inactive", joined: "1 day ago" },
    { id: 4, name: "Ananya Iyer", email: "a.iyer@university.edu", role: "User", status: "Active", joined: "2 days ago" },
    { id: 5, name: "Rohan Gupta", email: "r.gupta@university.edu", role: "Admin", status: "Active", joined: "1 week ago" },
]

export default function AdminDashboardPage() {
    // State management for interactions
    const [trees, setTrees] = useState([
        { id: 1, submittedBy: "Priya Sharma", location: "Block A", species: "Banyan", time: "1 hour ago", status: "Pending" },
        { id: 2, submittedBy: "Rahul Verma", location: "Sports Complex", species: "Gulmohar", time: "3 hours ago", status: "Pending" },
        { id: 3, submittedBy: "Sneha Patel", location: "Library Lawn", species: "Neem", time: "5 hours ago", status: "Pending" },
    ])

    const [issues, setIssues] = useState<CivicIssue[]>([])

    useEffect(() => {
        const savedIssues = localStorage.getItem('civicIssues')
        if (savedIssues) {
            try {
                setIssues(JSON.parse(savedIssues))
            } catch (e) {
                console.error("Failed to parse issues", e)
            }
        }
    }, [])

    const [broadcastMessage, setBroadcastMessage] = useState("")
    const [isSending, setIsSending] = useState(false)

    const handleApproveTree = (id: number) => {
        setTrees(trees.filter(t => t.id !== id))
        // In real app, this would call an API
    }

    const handleRejectTree = (id: number) => {
        setTrees(trees.filter(t => t.id !== id))
    }

    const handleUpdateStatus = (id: number, newStatus: "In Progress" | "Resolved") => {
        const updatedIssues = issues.map(issue =>
            issue.id === id ? { ...issue, status: newStatus } : issue
        )
        setIssues(updatedIssues)
        localStorage.setItem('civicIssues', JSON.stringify(updatedIssues))

        // Trigger a custom event so other components (if listening) or just to be safe
        window.dispatchEvent(new Event('storage'))
        window.dispatchEvent(new Event('civicIssuesUpdated'))
    }

    const handleSendBroadcast = () => {
        if (!broadcastMessage) return
        setIsSending(true)
        setTimeout(() => {
            setIsSending(false)
            setBroadcastMessage("")
            alert("Broadcast announcement sent to all users!")
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-4 sm:p-6 lg:p-8 space-y-8">
            {/* Page Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Admin Control Panel</h1>
                <p className="text-slate-600">Manage campus-wide sustainability system settings and users</p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Total Users</CardTitle>
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <Users className="h-5 w-5 text-white" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">1,247</div>
                        <p className="mt-2 flex items-center gap-1 text-xs text-emerald-600 font-medium">
                            <TrendingUp className="h-3 w-3" />
                            +89 since last week
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">System Health</CardTitle>
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                            <Activity className="h-5 w-5 text-white" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">99.9%</div>
                        <p className="mt-2 flex items-center gap-1 text-xs text-emerald-600 font-medium">
                            Operational
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Pending Moderation</CardTitle>
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{trees.length + issues.length}</div>
                        <p className="mt-2 text-xs text-slate-600">Requires attention</p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Security Flags</CardTitle>
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                            <Shield className="h-5 w-5 text-white" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">0</div>
                        <p className="mt-2 text-xs text-emerald-600 font-medium">No new threats</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="users" className="w-full">
                <TabsList className="grid w-full grid-cols-5 lg:w-[600px] bg-white shadow-md border-none h-12">
                    <TabsTrigger value="users" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Users</TabsTrigger>
                    <TabsTrigger value="moderation" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Moderation</TabsTrigger>
                    <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Analytics</TabsTrigger>
                    <TabsTrigger value="communications" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Broadcast</TabsTrigger>
                    <TabsTrigger value="settings" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Settings</TabsTrigger>
                </TabsList>

                {/* Users Tab */}
                <TabsContent value="users" className="mt-6">
                    <Card className="border-none bg-white shadow-lg">
                        <CardHeader>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <CardTitle className="text-slate-900">User Management</CardTitle>
                                    <CardDescription className="text-slate-600">Manage user roles and permissions</CardDescription>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <input
                                            type="search"
                                            placeholder="Search users..."
                                            className="h-9 w-[150px] rounded-md border border-input bg-background px-9 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:w-[250px]"
                                        />
                                    </div>
                                    <Button variant="outline" size="icon">
                                        <Filter className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>User</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Joined</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentUsers.map((user) => (
                                        <TableRow key={user.id} className="hover:bg-slate-50 transition-colors">
                                            <TableCell>
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-slate-900">{user.name}</span>
                                                    <span className="text-xs text-slate-500">{user.email}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={user.role === "Admin" ? "bg-blue-500 text-white" : user.role === "Moderator" ? "bg-indigo-500 text-white" : "bg-slate-200 text-slate-700"}>
                                                    {user.role}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className={`h-2 w-2 rounded-full ${user.status === "Active" ? "bg-emerald-500" : "bg-slate-400"}`} />
                                                    <span className="text-sm text-slate-700">{user.status}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-slate-600 text-sm">{user.joined}</TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuItem className="gap-2">
                                                            <UserPlus className="h-4 w-4" /> Edit Permissions
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="gap-2">
                                                            <Key className="h-4 w-4" /> Reset Password
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="gap-2 text-red-600">
                                                            <UserMinus className="h-4 w-4" /> Disable Account
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Moderation Tab */}
                <TabsContent value="moderation" className="mt-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <Card className="border-none bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-slate-900">Tree Approvals</CardTitle>
                                <CardDescription className="text-slate-600">Review new tree submissions from users</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {trees.length > 0 ? (
                                        trees.map((tree) => (
                                            <div key={tree.id} className="flex flex-col gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors sm:flex-row sm:items-center sm:justify-between">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-slate-900">{tree.species}</span>
                                                    <span className="text-sm text-slate-600 flex items-center gap-1">
                                                        <Globe className="h-3 w-3" /> {tree.location}
                                                    </span>
                                                    <span className="text-xs text-slate-500 mt-1">Submitted by {tree.submittedBy} • {tree.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button size="sm" variant="outline" className="h-8 gap-1 hover:bg-red-50 hover:text-red-600 hover:border-red-300" onClick={() => handleRejectTree(tree.id)}>
                                                        <X className="h-4 w-4" /> Reject
                                                    </Button>
                                                    <Button size="sm" className="h-8 gap-1 bg-blue-500 hover:bg-blue-600" onClick={() => handleApproveTree(tree.id)}>
                                                        <Check className="h-4 w-4" /> Approve
                                                    </Button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-8 text-center bg-emerald-50 rounded-lg border border-emerald-200">
                                            <CheckCircle className="h-8 w-8 text-emerald-600 mb-2" />
                                            <p className="text-sm font-medium text-slate-900">No pending trees</p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-slate-900">Flagged Issues</CardTitle>
                                <CardDescription className="text-slate-600">Review items reported by the community</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {issues.length > 0 ? (
                                        issues.map((issue) => (
                                            <div key={issue.id} className="flex flex-col gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors sm:flex-row sm:items-center sm:justify-between">
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-slate-900">{issue.type}</span>
                                                        <Badge variant="outline" className={`text-xs ${issue.priority === 'High' ? 'text-red-600 border-red-200 bg-red-50' : 'text-slate-600'
                                                            }`}>{issue.priority}</Badge>
                                                        <Badge className={`text-xs ${issue.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' :
                                                            issue.status === 'In Progress' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' :
                                                                'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                                            }`}>
                                                            {issue.status}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-slate-700 mt-1 line-clamp-1">{issue.description}</p>
                                                    <span className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" /> {issue.location} • {issue.reportedBy}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {issue.status === "Open" && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="h-8 gap-1 border-blue-200 text-blue-700 hover:bg-blue-50"
                                                            onClick={() => handleUpdateStatus(issue.id, "In Progress")}
                                                        >
                                                            Details & Start
                                                        </Button>
                                                    )}

                                                    {issue.status !== "Resolved" && (
                                                        <Button
                                                            size="sm"
                                                            className="h-8 gap-1 bg-emerald-600 hover:bg-emerald-700"
                                                            onClick={() => handleUpdateStatus(issue.id, "Resolved")}
                                                        >
                                                            <Check className="h-4 w-4" />
                                                            {issue.status === "Open" ? "Resolve" : "Complete"}
                                                        </Button>
                                                    )}

                                                    {issue.status === "Resolved" && (
                                                        <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                                                            <CheckCircle className="h-4 w-4" /> Completed
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-12 text-center">
                                            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                                                <CheckCircle className="h-6 w-6 text-emerald-600" />
                                            </div>
                                            <h3 className="text-lg font-medium text-slate-900">All Clear!</h3>
                                            <p className="text-sm text-slate-600 mt-1">No flagged items require attention at this time.</p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Analytics Tab */}
                <TabsContent value="analytics" className="mt-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <Card className="border-none bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-slate-900">User Registration Trend</CardTitle>
                                <CardDescription className="text-slate-600">Growth over the last 6 months</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-[250px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={registrationData}>
                                            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" vertical={false} />
                                            <XAxis dataKey="month" className="text-xs" tick={{ fill: '#64748b' }} />
                                            <YAxis className="text-xs" tick={{ fill: '#64748b' }} />
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                            <Area type="monotone" dataKey="users" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        <Card className="border-none bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-slate-900">Issue Resolution Status</CardTitle>
                                <CardDescription className="text-slate-600">Distribution across categories</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-[250px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={issueTrends} layout="vertical">
                                            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" horizontal={false} />
                                            <XAxis type="number" className="text-xs" hide />
                                            <YAxis dataKey="category" type="category" className="text-xs" width={60} tick={{ fill: '#64748b' }} />
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                            <Bar dataKey="resolved" stackId="a" fill="#10b981" radius={[0, 4, 4, 0]} />
                                            <Bar dataKey="open" stackId="a" fill="#ef4444" radius={[0, 4, 4, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Communications Tab */}
                <TabsContent value="communications" className="mt-6">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <Card className="border-none bg-white shadow-lg lg:col-span-2">
                            <CardHeader>
                                <CardTitle className="text-slate-900">Broadcast Center</CardTitle>
                                <CardDescription className="text-slate-600">Send notifications to all registered campus users</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="announcement" className="text-slate-900">Announcement Message</Label>
                                    <Textarea
                                        id="announcement"
                                        placeholder="Type your campus-wide announcement here..."
                                        className="min-h-[150px] resize-none border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                                        value={broadcastMessage}
                                        onChange={(e) => setBroadcastMessage(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs text-slate-600">
                                        * This message will appear on all users' dashboards immediately.
                                    </p>
                                    <Button className="gap-2 bg-blue-500 hover:bg-blue-600" onClick={handleSendBroadcast} disabled={isSending || !broadcastMessage}>
                                        <Megaphone className="h-4 w-4" />
                                        {isSending ? "Sending..." : "Send Broadcast"}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-slate-900">Recent Sent</CardTitle>
                                <CardDescription className="text-slate-600">History of broadcasts</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1 pb-3 border-b border-slate-200">
                                        <p className="text-sm font-medium text-slate-900">Campus Cleanup Sunday</p>
                                        <div className="flex items-center justify-between text-[10px] text-slate-600">
                                            <span>Target: All Students</span>
                                            <span>2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 pb-3 border-b border-slate-200">
                                        <p className="text-sm font-medium text-slate-900">New AI Analysis Feature Live</p>
                                        <div className="flex items-center justify-between text-[10px] text-slate-600">
                                            <span>Target: Everyone</span>
                                            <span>1 week ago</span>
                                        </div>
                                    </div>
                                    <Button variant="ghost" className="w-full text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                        <History className="h-3 w-3 mr-2" /> View Full History
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings" className="mt-6">
                    <Card className="border-none bg-white shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-slate-900">System Settings</CardTitle>
                            <CardDescription className="text-slate-600">Configure platform behaviors and integrations</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">AI Configuration</h3>
                                <div className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-slate-900">Auto-moderation</span>
                                        <span className="text-xs text-slate-600">Use AI to automatically flag inappropriate content</span>
                                    </div>
                                    <div className="h-6 w-11 bg-blue-500 rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-slate-900">Gemini Model</span>
                                        <span className="text-xs text-slate-600">Select AI model for tree health analysis</span>
                                    </div>
                                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Gemini 1.5 Pro</Badge>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">System Audit Log</h3>
                                <div className="rounded-lg border border-slate-200 divide-y divide-slate-200 overflow-hidden">
                                    {auditLogs.map((log) => (
                                        <div key={log.id} className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center">
                                                    <FileText className="h-4 w-4 text-slate-600" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-slate-900">{log.action}: <span className="text-blue-600">{log.target}</span></span>
                                                    <span className="text-xs text-slate-600">By {log.admin}</span>
                                                </div>
                                            </div>
                                            <span className="text-[10px] text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">{log.time}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="ghost" className="w-full text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                    <Download className="h-3 w-3 mr-2" /> Export Audit History
                                </Button>
                            </div>

                            <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                                <Button variant="outline" className="border-slate-300 hover:bg-slate-50">Reset Defaults</Button>
                                <Button className="bg-blue-500 hover:bg-blue-600">Save Configuration</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
