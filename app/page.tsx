import Link from "next/link"
import { ArrowRight, CalendarDays, Clock, Utensils, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroIllustration } from "@/components/hero-illustration"
import { MealPlanFeatures } from "@/components/meal-plan-features"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <header className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-pink-300" />
          <span className="text-lg font-semibold">helfy.io</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-white">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium text-slate-300 hover:text-white">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white">
            Login
          </Link>
          <Button asChild className="bg-pink-400 text-slate-950 hover:bg-pink-300">
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container px-4 py-12 md:px-6 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Personalized Meal Plans for Your Busy Week
                </h1>
                <p className="max-w-[600px] text-slate-400 md:text-xl">
                  Healthy eating made simple. Get tailored meal plans based on your dietary needs, time constraints, and
                  cooking skills.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-pink-400 text-slate-950 hover:bg-pink-300">
                  <Link href="/register">
                    Start Your Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HeroIllustration />
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-900 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm text-pink-300">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need for Weekday Meals
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes meal planning effortless with personalized recipes, grocery lists, and more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-850 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-400/10">
                  <CalendarDays className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">Personalized Meal Plans</h3>
                <p className="text-sm text-slate-400">Tailored to your dietary needs, preferences, and health goals.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-850 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10">
                  <Clock className="h-6 w-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold">Time-Saving Recipes</h3>
                <p className="text-sm text-slate-400">Quick and easy recipes perfect for busy weekdays.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-850 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10">
                  <Wallet className="h-6 w-6 text-green-300" />
                </div>
                <h3 className="text-xl font-bold">Budget-Friendly Options</h3>
                <p className="text-sm text-slate-400">Affordable meal plans that won't break the bank.</p>
              </div>
            </div>
            <MealPlanFeatures />
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm text-pink-300">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[600px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for you and your meal planning needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Basic</h3>
                  <p className="text-sm text-slate-400">For individuals just starting out</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-3xl font-bold">$9</span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    5 meal plans per week
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Basic recipe customization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Grocery list generation
                  </li>
                </ul>
                <Button className="mt-auto bg-slate-800 text-slate-50 hover:bg-slate-700">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border border-pink-400 bg-slate-900 p-6 shadow-lg shadow-pink-400/10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-sm text-slate-400">For health-conscious individuals</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-3xl font-bold">$19</span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unlimited meal plans
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Advanced recipe customization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Detailed nutritional information
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Progress tracking
                  </li>
                </ul>
                <Button className="mt-auto bg-pink-400 text-slate-950 hover:bg-pink-300">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Family</h3>
                  <p className="text-sm text-slate-400">For families and meal prep enthusiasts</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Family-sized recipes
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Bulk meal prep options
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Multiple user profiles
                  </li>
                </ul>
                <Button className="mt-auto bg-slate-800 text-slate-50 hover:bg-slate-700">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-800 bg-slate-950 py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-pink-300" />
            <span className="text-lg font-semibold">helfy.io</span>
          </div>
          <p className="text-center text-sm text-slate-500 md:text-left">
            © 2024 helfy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

