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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <header className="sticky top-0 z-50 ">
      {/* Top Bar */}
      <div className="hidden md:block">
        <div className="bg-gray-100 text-sm border-b border-gray-200">
          <div className="container mx-auto flex justify-between items-center h-8 px-4 ]">
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
              <span className="font-medium">+91 7716461066</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className=" shadow-lg bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 ">
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
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="hover:bg-white" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="p-4 border-b">
                  <SheetTitle className="flex justify-between items-center">
                    <Image
                      src="/Logo.png"
                      alt="Logo"
                      className="object-contain"
                      height={48}
                      width={100}
                    />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon"></Button>
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>
                <div className="p-4">
                  <div className="flex flex-col space-y-4">
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-green-700"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-green-700"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-green-700"
                    >
                      Contact
                    </Link>
                    {/* Mobile Accordion for Dropdown */}
                    <div className="flex flex-col space-y-4">
                      {menuCategories.map((category) => (
                        <Accordion
                          key={category.label}
                          type="single"
                          collapsible
                          className="w-full"
                        >
                          <AccordionItem
                            value={category.label
                              .toLowerCase()
                              .replace(/\s+/g, "-")}
                            className="border-b-0"
                          >
                            <AccordionTrigger className="font-medium text-gray-600 hover:no-underline hover:text-green-700 py-2">
                              {category.label}
                            </AccordionTrigger>

                            <AccordionContent>
                              {category.items.length > 0 ? (
                                <div className="flex flex-col gap-3 pl-4 pt-2">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={`/${category.label
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}/${item.name
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      className="flex items-center gap-3 text-gray-600 hover:text-green-700"
                                    >
                                      <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={24}
                                        height={24}
                                        className="rounded object-cover"
                                      />
                                      <span>{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <div className="text-sm text-gray-400 italic pl-4 pt-2">
                                  Coming soon
                                </div>
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ))}
                    </div>

                    <div className="pt-6">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* TODO: mobile sheet/accordion */}
      </nav>
    </header>
  );
}
