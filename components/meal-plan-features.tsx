import Image from "next/image"
import { Check, ChevronRight, Leaf, ShoppingCart, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"

export function MealPlanFeatures() {
  return (
    <div className="mt-16 grid gap-12 md:grid-cols-2">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10">
          <Leaf className="h-6 w-6 text-green-300" />
        </div>
        <h3 className="mt-4 text-xl font-bold">Nutritionally Balanced</h3>
        <p className="mt-2 text-slate-400">
          Our meal plans are designed by nutritionists to ensure you get all the nutrients you need throughout the week.
        </p>
        <ul className="mt-4 space-y-2">
          {["Calorie-controlled portions", "Balanced macronutrients", "Dietary restriction friendly"].map((item) => (
            <li key={item} className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-green-300" />
              <span className="text-sm text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10">
          <ShoppingCart className="h-6 w-6 text-blue-300" />
        </div>
        <h3 className="mt-4 text-xl font-bold">Smart Grocery Lists</h3>
        <p className="mt-2 text-slate-400">
          Automatically generate shopping lists based on your meal plan to save time and reduce food waste.
        </p>
        <ul className="mt-4 space-y-2">
          {["Organized by store section", "Optimized for minimal waste", "Adjusts for pantry items"].map((item) => (
            <li key={item} className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-blue-300" />
              <span className="text-sm text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-400/10">
          <Utensils className="h-6 w-6 text-pink-300" />
        </div>
        <h3 className="mt-4 text-xl font-bold">Recipe Customization</h3>
        <p className="mt-2 text-slate-400">
          Tailor recipes to your taste preferences, cooking skills, and available time.
        </p>
        <ul className="mt-4 space-y-2">
          {["Swap ingredients easily", "Adjust serving sizes", "Filter by cooking time"].map((item) => (
            <li key={item} className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-pink-300" />
              <span className="text-sm text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
        <div className="p-6">
          <h3 className="text-xl font-bold">See It In Action</h3>
          <p className="mt-2 text-slate-400">
            Watch how easy it is to create personalized meal plans in just a few clicks.
          </p>
          <Button variant="link" className="mt-4 p-0 text-pink-300">
            Watch demo <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="relative mt-4 h-48 w-full bg-slate-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-400/20 text-pink-300">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=192&width=384"
            alt="Demo video thumbnail"
            width={384}
            height={192}
            className="h-full w-full object-cover opacity-50"
          />
        </div>
      </div>
    </div>
  )
}

