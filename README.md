# RootSense Frontend

A modern sustainability intelligence platform for college campuses built with Next.js 16.

## 🌱 Features

- **Tree Health Tracking**: Monitor tree survival with AI-powered analysis
- **Civic Issue Reporting**: Report and track environmental issues
- **Impact Dashboard**: Visualize environmental metrics and achievements
- **Interactive Campus Map**: Geographic view of trees and issues using Leaflet
- **Admin Panel**: Comprehensive moderation and analytics tools
- **Authentication**: Secure user management with Clerk

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Clerk
- **AI**: Google Gemini API
- **Maps**: Leaflet + OpenStreetMap
- **Database**: Supabase (optional)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Krisshna-16/Rootsense-Frontend.git
   cd Rootsense-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual API keys.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (app)/             # Protected routes
│   │   ├── dashboard/     # Main dashboard
│   │   ├── trees/         # Tree inventory
│   │   ├── issues/        # Civic issues
│   │   ├── impact/        # Impact metrics
│   │   └── map/           # Interactive map
│   ├── admin/             # Admin panel
│   ├── sign-in/           # Authentication
│   └── sign-up/
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── app-sidebar.tsx   # Desktop navigation
│   ├── mobile-nav.tsx    # Mobile navigation
│   └── vintage-logo.tsx  # Brand logo
├── lib/                   # Utilities & data
│   ├── mock-data.ts      # Demo data
│   ├── map-data.ts       # Map coordinates
│   └── gemini.ts         # AI integration
└── public/               # Static assets
```

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed Vercel deployment instructions.

## 📄 License

This project is private and proprietary.

## 👥 Team

Developed by Team RootSense