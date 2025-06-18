// src/page-components/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  name: string;
  image: string;
}

interface Category {
  label: string;
  items: MenuItem[];
}

// define once, fill `items` later with real data
const menuCategories: Category[] = [
  { label: "Indoor Lights", items: [] },
  { label: "Outdoor Lights", items: [] },
  { label: "Solar Light", items: [] },
  { label: "Industrial Products", items: [] },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center h-8 px-4">
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-600">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Phone className="h-4 w-4" />
            <span>Support</span>
            <span className="font-medium">+91 7043034626</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuCategories.map((cat) => (
              <DropdownMenu key={cat.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center hover:text-green-600"
                  >
                    {cat.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  sideOffset={4}
                  align="start"
                  className="bg-white p-4 shadow-md rounded-md min-w-[200px]"
                >
                  {cat.items.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                      {cat.items.map((item) => (
                        <div key={item.name} className="text-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="mx-auto"
                          />
                          <p className="mt-2 text-sm">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">Coming Soon</p>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>

        {/* TODO: mobile sheet/accordion */}
      </nav>
    </header>
  );
}
