import Link from "next/link"
import { Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Utensils className="mx-auto h-12 w-12 text-pink-400" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">Sign in to your account</h2>
          <p className="mt-2 text-sm text-slate-400">
            Or{" "}
            <Link href="/register" className="font-medium text-pink-400 hover:text-pink-300">
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-slate-900 text-white placeholder-slate-400"
                placeholder="Email address"
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="bg-slate-900 text-white placeholder-slate-400"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-pink-400 focus:ring-pink-400"
              />
              <Label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300">
                Remember me
              </Label>
            </div>

            <div className="text-sm">
              <Link href="#" className="font-medium text-pink-400 hover:text-pink-300">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-pink-400 text-slate-950 hover:bg-pink-300">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

