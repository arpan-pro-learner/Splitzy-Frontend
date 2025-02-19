"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  Users,
  FolderSyncIcon as Sync,
  Globe,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "./Footer";


export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Instant Bill Splitting",
      description: "Split expenses on the go with just a few taps.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Clear and Easy Tracking",
      description: "Never lose track of who paid what.",
    },
    {
      icon: <Sync className="h-6 w-6" />,
      title: "Seamless Syncing",
      description: "Works across devices and with your friends' accounts.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multiple Currencies",
      description: "Perfect for traveling or international expenses.",
    },
  ];

  const steps = [
    {
      title: "Create a Group",
      description: "Add friends or roommates and start tracking shared costs.",
      image: "/data-analysis.svg",
    },
    {
      title: "Add Expenses",
      description: "Snap pictures, enter amounts, or sync with bank accounts.",
      image: "/add-expense.svg",
    },
    {
      title: "Settle Up",
      description: "Know exactly what you owe and who to pay with a tap.",
      image: "/settle-up.svg",
    },
  ];

  const testimonials = [
    {
      quote:
        "It's saved me countless arguments with my roommates. I love how easy it is!",
      author: "Sarah J.",
      role: "Student",
      avatar: "/User01.jpg?height=64&width=64",
    },
    {
      quote: "Perfect for our group trips—no more guessing who owes who!",
      author: "Mike R.",
      role: "Professional",
      avatar: "/User01.jpg?height=64&width=64",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 via-blue-400/5 to-background px-4 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Simplify Shared Expenses, Anytime, Anywhere
              </h1>
              <p className="text-xl text-muted-foreground">
                Effortlessly split bills, track payments, and keep everyone on
                the same page—whether you're with friends, roommates, or
                coworkers.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                 <Link href="/sign-up">
                  Get Started for Free
                  </Link>
                </Button>
                <Button
                  size="lg"
                 
                  onClick={() => setIsVideoPlaying(true)}
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >

                <Link href="#how-it-works">See How It Works  </Link>  
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-square lg:aspect-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="save-money.svg"
                alt="Random image from Picsum"
                width={800}
                height={200}
                className="rounded-lg object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Splitzy?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to manage shared expenses, all in one place.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="mt-4 font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-muted/50 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How Splitzy Makes It Easy
          </h2>
          <div className="mt-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="mb-12 grid items-center gap-8 lg:grid-cols-2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <h3 className="text-2xl font-bold">
                    {`Step ${index + 1}: ${step.title}`}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <div>
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="people-love-us" className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Loved by Users Like You
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <p className="text-lg font-medium italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <Link href="/sign-up">
               Join Splitzy Today
              </Link>
             
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
 
    </div>
  );
}
