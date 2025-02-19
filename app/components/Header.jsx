"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [ 
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "People Love Us", href: "#people-love-us" },
]



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link 
          href="/" 
          className="flex items-center space-x-2 transition-transform hover:scale-[1.02]"
        >
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
            Splitzy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide text-muted-foreground",
                "transition-all duration-200 ease-out",
                "hover:text-blue-600",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                "rounded-md px-2 py-1"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden space-x-4 md:flex">
          <Button
            variant="ghost"
            className="font-medium tracking-wide transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
            asChild
          >
            <Link href="/sign-in">Log In</Link>
          </Button>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-blue-500 font-medium tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-200"
            asChild
          >
            <Link href="/sign-up">Sign Up Free</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="border-b bg-background md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "text-sm font-medium tracking-wide text-muted-foreground",
                    "rounded-md px-2 py-1.5",
                    "transition-colors duration-200",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-center font-medium tracking-wide hover:bg-blue-50 hover:text-blue-600"
                  asChild
                >
                  <Link href="/sign-in">Log In</Link>
                </Button>
                <Button 
                  className="w-full justify-center bg-gradient-to-r from-blue-600 to-blue-500 font-medium tracking-wide text-white"
                  asChild
                >
                  <Link href="/sign-up">Sign Up Free</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}