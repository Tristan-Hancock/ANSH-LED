"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Image
              src="/Logo.png"
              alt="Logo"
              className="object-contain"
              height={48}
              width={150}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex flex-col ">
              <div className="flex flex-row space-x-4">
                <Link href="#">About Us</Link>
                <Link href="#">Contact Us</Link>
              </div>
              <div className="flex justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="hover:bg-white">
                      Halogen Lights
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link href="/halogen-lights/led">LED</Link>
                    <Link href="/halogen-lights/halogen">Halogen</Link>
                    <Link href="/halogen-lights/xenon">Xenon</Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="hidden md:block items-center">
            <div className="flex justify-center mb-1">FAQ</div>
            <Button className="bg-white text-green-500 rounded-full px-6 py-2 border border-green-7h00 hover:bg-white">
              <Phone className="mr-2 h-4 w-4 text-green-500" />
              Call Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
                      href="#"
                      className="text-gray-600 hover:text-green-700"
                    >
                      About Us
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-700"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-700"
                    >
                      FAQ
                    </Link>
                    {/* Mobile Accordion for Dropdown */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="halogen-lights"
                        className="border-b-0"
                      >
                        <AccordionTrigger className="font-medium text-gray-600 hover:no-underline hover:text-green-700 py-2">
                          Halogen Lights
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-3 pl-4 pt-2">
                            <Link
                              href="/halogen-lights/led"
                              className="text-gray-600 hover:text-green-700"
                            >
                              LED
                            </Link>
                            <Link
                              href="/halogen-lights/halogen"
                              className="text-gray-600 hover:text-green-700"
                            >
                              Halogen
                            </Link>
                            <Link
                              href="/halogen-lights/xenon"
                              className="text-gray-600 hover:text-green-700"
                            >
                              Xenon
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

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
      </div>
    </nav>
  );
};

export default Navbar;
