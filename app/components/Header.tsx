"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
// import InteractiveBackground from "./InteractiveBackground"

interface HeaderProps {
  companyName: string
  navigation: Array<{ name: string; href: string }>
}

export default function Header({ companyName, navigation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-[#8a2be2] text-white z-10">
      {/* <InteractiveBackground /> */}
      <div className="container mx-auto flex justify-between items-center px-4 relative z-20">
        <Link href="/" className="text-xl md:text-2xl font-bold">
          {companyName}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Button variant="ghost" className="text-white hover:text-purple-600" asChild>
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="text-white p-2">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-white">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:underline text-purple-700 text-sm md:text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

