// src/page-components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Stay Updated */}
        <div>
          <h2 className="text-green-400 text-lg font-semibold mb-4">
            Stay Updated
          </h2>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook">
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <Image src="/icons/x.png" alt="X" width={24} height={24} />
            </a>
            <a href="#" aria-label="Google+">
              <Image
                src="/icons/google.png"
                alt="Google+"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div>
          <h2 className="text-green-400 text-lg font-semibold mb-4">
            Terms and Conditions
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
        
          </p>
        </div>

        {/* Navigate */}
       <div>
        
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <span className="hover:text-green-500">Ansh LED </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-green-500">About Us </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-green-500">Contact Us </span>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <span className="hover:text-green-500">Support </span>
              </Link>
            </li>
          </ul>
        </div> 
         <div>
          <h2 className="text-green-400 text-lg font-semibold mb-4">
            Privacy Policy
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
          </p>
        </div>
      </div>
    </footer>
  );
}
