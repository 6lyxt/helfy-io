"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Filter,
  Home,
  Plus,
  Settings,
  ShoppingCart,
  User,
  Utensils,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WeekdayMealPlan } from "@/components/weekday-meal-plan";

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [caloriesValue, setCaloriesValue] = useState("1,850 kcal");
  const [proteinValue, setProteinValue] = useState("95g");
  const [carbsValue, setCarbsValue] = useState("210g");
  const [fatValue, setFatValue] = useState("65g");
  const [spinachQuantity, setSpinachQuantity] = useState("2 bunches");
  const [bellPeppersQuantity, setBellPeppersQuantity] = useState("3");
  const [avocadosQuantity, setAvocadosQuantity] = useState("2");
  const [chickenBreastQuantity, setChickenBreastQuantity] = useState("1.5 lbs");
  const [salmonFilletsQuantity, setSalmonFilletsQuantity] = useState("2");
  const [weekdayMeals, setWeekdayMeals] = useState([
    { day: "Monday", breakfast: "Oatmeal with berries", lunch: "Chicken salad", dinner: "Salmon with asparagus" },
    { day: "Tuesday", breakfast: "Scrambled eggs", lunch: "Lentil soup", dinner: "Vegetarian stir-fry" },
    { day: "Wednesday", breakfast: "Smoothie", lunch: "Turkey sandwich", dinner: "Beef tacos" },
    { day: "Thursday", breakfast: "Yogurt with granola", lunch: "Quinoa salad", dinner: "Chicken curry" },
    { day: "Friday", breakfast: "Pancakes", lunch: "Tuna salad", dinner: "Pizza" },
  ]);
  const [weekendPlanExists, setWeekendPlanExists] = useState(false);
  const [weekendMeals, setWeekendMeals] = useState([
    { day: "Saturday", breakfast: "French toast", lunch: "Burger", dinner: "Steak" },
    { day: "Sunday", breakfast: "Waffles", lunch: "Pasta", dinner: "Roast chicken" },
  ]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const nextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  const prevWeek = () => {
    const prevWeek = new Date(currentDate);
    prevWeek.setDate(currentDate.getDate() - 7);
    setCurrentDate(prevWeek);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50 ">
      {/* Sidebar */}
      <div className="hidden fixed h-full w-64 flex-col border-r border-slate-800 bg-slate-900 md:flex">
        <div className="flex h-16 items-center border-b border-slate-800 px-6">
          <Link href="/" className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-pink-300" />
            <span className="font-semibold">helfy.io</span>
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-1 p-4">
          <Button variant="ghost" className="justify-start gap-2 text-slate-300" asChild>
            <Link href="/dashboard">
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2 bg-slate-800 text-pink-300" asChild>
            <Link href="/dashboard">
              <Calendar className="h-5 w-5" />
              Meal Plans
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2 text-slate-300" asChild>
            <Link href="/dashboard/recipes">
              <Utensils className="h-5 w-5" />
              Recipes
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2 text-slate-300" asChild>
            <Link href="/dashboard/shopping">
              <ShoppingCart className="h-5 w-5" />
              Shopping List
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2 text-slate-300" asChild>
            <Link href="/dashboard/profile">
              <User className="h-5 w-5" />
              Profile
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2 text-slate-300" asChild>
            <Link href="/dashboard/settings">
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </Button>
        </div>
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-lg bg-slate-800 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-400/20 text-pink-300">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Sarah Johnson</p>
              <p className="text-xs text-slate-400">Pro Plan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon">
              <Utensils className="h-5 w-5 text-pink-300" />
            </Button>
            <span className="font-semibold">helfy.io</span>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="outline" size="sm" onClick={prevWeek}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{formatDate(currentDate)}</span>
            <Button variant="outline" size="sm" onClick={nextWeek}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button className="hidden gap-2 bg-pink-400 text-slate-950 hover:bg-pink-300 sm:flex">
              <Plus className="h-4 w-4" />
              New Meal Plan
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Your Meal Plan</h1>
              <Button variant="outline" size="sm" className="gap-2 md:hidden">
                <Calendar className="h-4 w-4" />
                {formatDate(currentDate)}
              </Button>
            </div>

            <Tabs defaultValue="weekday" className="">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="weekday">Weekday Plan</TabsTrigger>
                <TabsTrigger value="weekend">Weekend Plan</TabsTrigger>
              </TabsList>
              <TabsContent value="weekday" className="mt-4">
                <WeekdayMealPlan />
              </TabsContent>
              <TabsContent value="weekend" className="mt-4">
                <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-900">
                  <div className="flex flex-col items-center gap-2 p-4 text-center">
                    <Calendar className="h-10 w-10 text-slate-500" />
                    <h3 className="text-lg font-medium">No Weekend Plan</h3>
                    <p className="text-sm text-slate-400">Create a weekend meal plan to see it here.</p>
                    <Button className="mt-2 gap-2 bg-pink-400 text-slate-950 hover:bg-pink-300">
                      <Plus className="h-4 w-4" />
                      Create Weekend Plan
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-slate-900 text-slate-50">
                <CardHeader className="pb-2">
                  <CardTitle>Nutritional Summary</CardTitle>
                  <CardDescription className="text-slate-400">Weekly average</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Calories</p>
                        <p className="text-lg font-medium">{caloriesValue}</p>
                      </div>
                      <div className="h-2 w-24 rounded-full bg-slate-800">
                        <div className="h-full w-3/4 rounded-full bg-pink-400"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Protein</p>
                        <p className="text-lg font-medium">{proteinValue}</p>
                      </div>
                      <div className="h-2 w-24 rounded-full bg-slate-800">
                        <div className="h-full w-4/5 rounded-full bg-blue-400"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Carbs</p>
                        <p className="text-lg font-medium">{carbsValue}</p>
                      </div>
                      <div className="h-2 w-24 rounded-full bg-slate-800">
                        <div className="h-full w-2/3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Fat</p>
                        <p className="text-lg font-medium">{fatValue}</p>
                      </div>
                      <div className="h-2 w-24 rounded-full bg-slate-800">
                        <div className="h-full w-1/2 rounded-full bg-purple-400"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="h-auto p-0 text-pink-300">
                    View detailed breakdown
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-slate-900 text-slate-50">
                <CardHeader className="pb-2">
                  <CardTitle>Shopping List</CardTitle>
                  <CardDescription className="text-slate-400">For this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-slate-300">Produce</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-400">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400"></div>
                          <span>Spinach (2 bunches)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400"></div>
                          <span>Bell peppers (3)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400"></div>
                          <span>Avocados (2)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">Protein</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-400">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                          <span>Chicken breast (1.5 lbs)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                          <span>Salmon fillets (2)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="h-auto p-0 text-pink-300">
                    View full shopping list
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-slate-900 text-slate-50">
                <CardHeader className="pb-2">
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription className="text-slate-400">Manage your meal plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <Button variant="outline" className="justify-start gap-2 text-slate-300">
                      <Plus className="h-4 w-4" />
                      Add custom recipe
                    </Button>
                    <Button variant="outline" className="justify-start gap-2 text-slate-300">
                      <Clock className="h-4 w-4" />
                      Adjust meal times
                    </Button>
                    <Button variant="outline" className="justify-start gap-2 text-slate-300">
                      <ShoppingCart className="h-4 w-4" />
                      Generate shopping list
                    </Button>
                    <Button variant="outline" className="justify-start gap-2 text-slate-300">
                      <ArrowLeft className="h-4 w-4" />
                      Revert to previous plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

