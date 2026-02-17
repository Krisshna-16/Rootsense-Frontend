import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, TreeDeciduous, AlertCircle, TrendingUp, Shield, Users, Droplet, CheckCircle } from "lucide-react"
import { VintageLogo } from "@/components/vintage-logo"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1a3a1a] border-b border-[#2d5016]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <VintageLogo width={60} height={90} />
            {/* <span className="text-xl font-bold text-white">ROOTSENSE</span> */}
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/dashboard" className="text-sm font-medium text-[#e8e6d9] transition-colors hover:text-white">
              Dashboard
            </Link>
            <Link href="/trees" className="text-sm font-medium text-[#e8e6d9] transition-colors hover:text-white">
              Trees
            </Link>
            <Link href="/issues" className="text-sm font-medium text-[#e8e6d9] transition-colors hover:text-white">
              Civic Issues
            </Link>
            <Link href="/impact" className="text-sm font-medium text-[#e8e6d9] transition-colors hover:text-white">
              Impact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/admin/login"
              className="flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Shield className="h-4 w-4" />
              Admin
            </Link>

            <Link
              href="/sign-in"
              className="text-sm font-medium text-[#e8e6d9] hover:text-white transition-colors"
            >
              Sign In
            </Link>

            <Button className="bg-[#d4af37] text-[#1a3a1a] hover:bg-[#c9b037] font-semibold" asChild>
              <Link href="/sign-up">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/green-mountains.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a1a]/80 via-[#1a3a1a]/70 to-[#1a3a1a]/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            We take care of your<br />campus & trees
          </h1>
          <p className="mb-8 text-lg text-[#e8e6d9] max-w-2xl mx-auto">
            ROOTSENSE is a sustainability intelligence platform for college campuses. Track tree survival, report civic issues, and measure environmental impact with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#d4af37] text-[#1a3a1a] hover:bg-[#c9b037] font-semibold text-base px-8 py-6" asChild>
              <Link href="/sign-up">Get In Touch</Link>
            </Button>
            <Button variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 font-semibold text-base px-8 py-6" asChild>
              <Link href="/admin/login">Admin Access</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 h-80">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/green-mountains.jpg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a1a]/90 via-[#1a3a1a]/50 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <TreeDeciduous className="h-10 w-10 text-[#d4af37] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Tree Health Tracking</h3>
                <p className="text-[#e8e6d9] text-sm">Monitor tree health with AI-powered analysis and photo-based tracking</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 h-80">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/botanical-bg.jpg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a1a]/90 via-[#1a3a1a]/50 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <AlertCircle className="h-10 w-10 text-[#d4af37] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Civic Issue Reporting</h3>
                <p className="text-[#e8e6d9] text-sm">Report and track environmental issues to keep your campus clean and green</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 h-80">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/green-mountains.jpg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a1a]/90 via-[#1a3a1a]/50 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <TrendingUp className="h-10 w-10 text-[#d4af37] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Environmental Impact</h3>
                <p className="text-[#e8e6d9] text-sm">Measure and visualize your campus environmental impact with real-time data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-[#1a3a1a]">
                Welcome To RootSense, We Cultivate More Than Just Plants
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Established with a passion for nature and a commitment to sustainable living, RootSense has been a leading innovator dedicated to providing innovative solutions for greening campuses. Our mission is to empower institutions with the tools they need for effective tree management, environmental monitoring, and community engagement.
              </p>
              <Link href="/dashboard" className="inline-flex items-center text-[#2d5016] font-semibold hover:text-[#1a3a1a] transition-colors">
                About Us →
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/green-mountains.jpg)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-[#f5f5dc]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="transition-transform duration-300 hover:scale-110">
              <div className="mb-2 text-5xl font-bold text-[#1a3a1a]">1,247</div>
              <div className="text-sm font-medium text-gray-700">Trees Monitored</div>
            </div>
            <div className="transition-transform duration-300 hover:scale-110">
              <div className="mb-2 text-5xl font-bold text-[#1a3a1a]">89%</div>
              <div className="text-sm font-medium text-gray-700">Survival Rate</div>
            </div>
            <div className="transition-transform duration-300 hover:scale-110">
              <div className="mb-2 text-5xl font-bold text-[#1a3a1a]">24K</div>
              <div className="text-sm font-medium text-gray-700">Liters Water Saved</div>
            </div>
            <div className="transition-transform duration-300 hover:scale-110">
              <div className="mb-2 text-5xl font-bold text-[#1a3a1a]">156</div>
              <div className="text-sm font-medium text-gray-700">Issues Resolved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[#1a3a1a]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Meticulous And Sustainable Process</h2>
            <Button className="bg-[#d4af37] text-[#1a3a1a] hover:bg-[#c9b037] font-semibold mt-4">
              Our Process
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]">
                  <Users className="h-8 w-8 text-[#1a3a1a]" />
                </div>
              </div>
              <div className="mb-2 text-[#d4af37] font-bold">01</div>
              <h3 className="mb-2 text-lg font-bold text-white">Discovery and Consultation</h3>
              <p className="text-sm text-[#e8e6d9]">
                We analyze your campus needs and create a customized sustainability plan
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]">
                  <TreeDeciduous className="h-8 w-8 text-[#1a3a1a]" />
                </div>
              </div>
              <div className="mb-2 text-[#d4af37] font-bold">02</div>
              <h3 className="mb-2 text-lg font-bold text-white">Data Collection</h3>
              <p className="text-sm text-[#e8e6d9]">
                Gather tree health data through photo-based tracking and manual surveys
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]">
                  <TrendingUp className="h-8 w-8 text-[#1a3a1a]" />
                </div>
              </div>
              <div className="mb-2 text-[#d4af37] font-bold">03</div>
              <h3 className="mb-2 text-lg font-bold text-white">AI-Powered Analysis</h3>
              <p className="text-sm text-[#e8e6d9]">
                Our AI analyzes tree health and provides actionable insights
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]">
                  <CheckCircle className="h-8 w-8 text-[#1a3a1a]" />
                </div>
              </div>
              <div className="mb-2 text-[#d4af37] font-bold">04</div>
              <h3 className="mb-2 text-lg font-bold text-white">Action & Support</h3>
              <p className="text-sm text-[#e8e6d9]">
                Implement recommendations and track progress with ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1a3a1a]">Ready to make your campus greener?</h2>
          <p className="mb-8 text-gray-700">
            Start tracking your sustainability efforts today and make a measurable impact on your campus environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#2d5016] text-white hover:bg-[#1a3a1a] font-semibold text-base px-8 py-6" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold text-base px-8 py-6" asChild>
              <Link href="/admin/login">Admin Portal</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3a1a] border-t border-[#2d5016] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <VintageLogo width={60} height={90} />
              {/* <span className="font-bold text-white">ROOTSENSE</span> */}
            </div>
            <p className="text-sm text-[#e8e6d9]">
              Hackathon Project - Sustainability Intelligence for Campuses
            </p>
            <Link href="/admin/login" className="text-xs text-amber-400 hover:text-amber-300 transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
