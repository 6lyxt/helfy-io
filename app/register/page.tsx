"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft, ArrowRight, Utensils } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { StepIcon } from "@/components/step-icon"

const personalInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

const dietaryPreferencesSchema = z.object({
  dietType: z.enum(["omnivore", "vegetarian", "vegan", "pescatarian", "keto", "paleo"]),
  allergies: z.string().optional(),
  cookingSkill: z.enum(["beginner", "intermediate", "advanced"]),
})

const healthGoalsSchema = z.object({
  currentWeight: z.number().min(30, "Weight must be at least 30 kg").max(300, "Weight must be less than 300 kg"),
  targetWeight: z.number().min(30, "Weight must be at least 30 kg").max(300, "Weight must be less than 300 kg"),
  height: z.number().min(100, "Height must be at least 100 cm").max(250, "Height must be less than 250 cm"),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very_active"]),
  weeklyGoal: z.number().min(-1).max(1),
})

const steps = [
  { title: "Personal Info", schema: personalInfoSchema },
  { title: "Dietary Preferences", schema: dietaryPreferencesSchema },
  { title: "Health Goals", schema: healthGoalsSchema },
]

export default function RegisterPage() {
  const [step, setStep] = useState(0)

  const form = useForm({
    resolver: zodResolver(steps[step].schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      dietType: "omnivore",
      allergies: "",
      cookingSkill: "beginner",
      currentWeight: 70,
      targetWeight: 70,
      height: 170,
      activityLevel: "moderate",
      weeklyGoal: 0,
    },
  })

  function onSubmit(values: z.infer<(typeof steps)[typeof step]["schema"]>) {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      console.log(values)
      // Here you would typically send the data to your backend
      alert("Registration successful!")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Utensils className="mx-auto h-12 w-12 text-pink-400" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">Create your account</h2>
          <p className="mt-2 text-sm text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-pink-400 hover:text-pink-300">
              Sign in
            </Link>
          </p>
        </div>

        <div className="flex justify-between">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <StepIcon step={i + 1} currentStep={step} />
              <span className="mt-2 text-xs text-slate-400">{s.title}</span>
            </div>
          ))}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 0 && (
              <>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-slate-900 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-slate-900 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="********" {...field} className="bg-slate-900 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="dietType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Diet Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-slate-900 text-white">
                            <SelectValue placeholder="Select a diet type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-slate-900 text-white">
                          <SelectItem value="omnivore">Omnivore</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                          <SelectItem value="pescatarian">Pescatarian</SelectItem>
                          <SelectItem value="keto">Keto</SelectItem>
                          <SelectItem value="paleo">Paleo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="allergies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Allergies</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. nuts, dairy, shellfish"
                          {...field}
                          className="bg-slate-900 text-white"
                        />
                      </FormControl>
                      <FormDescription>Separate multiple allergies with commas</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cookingSkill"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cooking Skill</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="beginner" />
                            </FormControl>
                            <FormLabel className="font-normal">Beginner</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="intermediate" />
                            </FormControl>
                            <FormLabel className="font-normal">Intermediate</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="advanced" />
                            </FormControl>
                            <FormLabel className="font-normal">Advanced</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {step === 2 && (
              <>
                <FormField
                  control={form.control}
                  name="currentWeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Weight (kg)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          className="bg-slate-900 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="targetWeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Weight (kg)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          className="bg-slate-900 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height (cm)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          className="bg-slate-900 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="activityLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-slate-900 text-white">
                            <SelectValue placeholder="Select your activity level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-slate-900 text-white">
                          <SelectItem value="sedentary">Sedentary</SelectItem>
                          <SelectItem value="light">Lightly Active</SelectItem>
                          <SelectItem value="moderate">Moderately Active</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="very_active">Very Active</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weeklyGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weekly Weight Goal</FormLabel>
                      <FormControl>
                        <Slider
                          min={-1}
                          max={1}
                          step={0.1}
                          value={[field.value]}
                          onValueChange={(value) => field.onChange(value[0])}
                          className="py-4"
                        />
                      </FormControl>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Lose 1kg/week</span>
                        <span>Maintain</span>
                        <span>Gain 1kg/week</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <div className="flex justify-between">
              {step > 0 && (
                <Button type="button" onClick={() => setStep(step - 1)} variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              )}
              <Button type="submit" className="bg-pink-400 text-slate-950 hover:bg-pink-300">
                {step === steps.length - 1 ? "Complete" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

