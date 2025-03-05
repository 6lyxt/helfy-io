import Image from "next/image"
import { Clock, Edit2, Heart, Info, MoreHorizontal, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WeekdayMealPlan() {
  // Sample meal plan data
  const mealPlan = [
    {
      day: "Monday",
      meals: [
        {
          type: "Breakfast",
          name: "Greek Yogurt Parfait",
          image: "/placeholder.svg?height=80&width=80",
          time: "10 min",
          calories: 320,
          favorite: true,
        },
        {
          type: "Lunch",
          name: "Mediterranean Salad",
          image: "/placeholder.svg?height=80&width=80",
          time: "15 min",
          calories: 450,
          favorite: false,
        },
        {
          type: "Dinner",
          name: "Baked Salmon with Asparagus",
          image: "/placeholder.svg?height=80&width=80",
          time: "25 min",
          calories: 520,
          favorite: true,
        },
      ],
    },
    {
      day: "Tuesday",
      meals: [
        {
          type: "Breakfast",
          name: "Avocado Toast with Egg",
          image: "/placeholder.svg?height=80&width=80",
          time: "12 min",
          calories: 380,
          favorite: false,
        },
        {
          type: "Lunch",
          name: "Quinoa Bowl with Vegetables",
          image: "/placeholder.svg?height=80&width=80",
          time: "20 min",
          calories: 420,
          favorite: false,
        },
        {
          type: "Dinner",
          name: "Grilled Chicken with Sweet Potatoes",
          image: "/placeholder.svg?height=80&width=80",
          time: "30 min",
          calories: 550,
          favorite: true,
        },
      ],
    },
    {
      day: "Wednesday",
      meals: [
        {
          type: "Breakfast",
          name: "Protein Smoothie Bowl",
          image: "/placeholder.svg?height=80&width=80",
          time: "8 min",
          calories: 340,
          favorite: true,
        },
        {
          type: "Lunch",
          name: "Turkey Wrap with Hummus",
          image: "/placeholder.svg?height=80&width=80",
          time: "10 min",
          calories: 410,
          favorite: false,
        },
        {
          type: "Dinner",
          name: "Vegetable Stir Fry with Tofu",
          image: "/placeholder.svg?height=80&width=80",
          time: "25 min",
          calories: 480,
          favorite: false,
        },
      ],
    },
    {
      day: "Thursday",
      meals: [
        {
          type: "Breakfast",
          name: "Overnight Oats with Berries",
          image: "/placeholder.svg?height=80&width=80",
          time: "5 min",
          calories: 310,
          favorite: true,
        },
        {
          type: "Lunch",
          name: "Chickpea Salad Sandwich",
          image: "/placeholder.svg?height=80&width=80",
          time: "15 min",
          calories: 430,
          favorite: false,
        },
        {
          type: "Dinner",
          name: "Baked Cod with Roasted Vegetables",
          image: "/placeholder.svg?height=80&width=80",
          time: "30 min",
          calories: 490,
          favorite: false,
        },
      ],
    },
    {
      day: "Friday",
      meals: [
        {
          type: "Breakfast",
          name: "Spinach and Feta Omelette",
          image: "/placeholder.svg?height=80&width=80",
          time: "15 min",
          calories: 350,
          favorite: false,
        },
        {
          type: "Lunch",
          name: "Lentil Soup with Whole Grain Bread",
          image: "/placeholder.svg?height=80&width=80",
          time: "20 min",
          calories: 400,
          favorite: true,
        },
        {
          type: "Dinner",
          name: "Shrimp and Vegetable Pasta",
          image: "/placeholder.svg?height=80&width=80",
          time: "25 min",
          calories: 530,
          favorite: true,
        },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {mealPlan.map((day) => (
        <div key={day.day} className="rounded-lg border border-slate-800 bg-slate-900">
          <div className="border-b border-slate-800 px-4 py-3">
            <h3 className="font-medium">{day.day}</h3>
          </div>
          <div className="divide-y divide-slate-800">
            {day.meals.map((meal) => (
              <div key={meal.type} className="flex items-center gap-4 p-4">
                <div className="flex-shrink-0">
                  <Image
                    src={meal.image || "/placeholder.svg"}
                    alt={meal.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-pink-300">{meal.type}</p>
                  <h4 className="text-base font-medium">{meal.name}</h4>
                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{meal.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{meal.calories} kcal</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={meal.favorite ? "text-pink-400" : "text-slate-400"}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{meal.favorite ? "Remove from favorites" : "Add to favorites"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-slate-400">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View recipe details</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-slate-400">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-slate-900 text-slate-50">
                      <DropdownMenuItem className="flex items-center gap-2 text-slate-300">
                        <Edit2 className="h-4 w-4" />
                        <span>Edit meal</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 text-slate-300">
                        <Plus className="h-4 w-4" />
                        <span>Replace meal</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-slate-800" />
                      <DropdownMenuItem className="flex items-center gap-2 text-red-400">
                        <Trash className="h-4 w-4" />
                        <span>Remove meal</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

