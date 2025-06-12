import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Checkbox } from "../components/ui/checkbox"
import { ChevronDown, Download, Phone } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="border-b border-[#f3f3f3] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#7ea81d] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-[#1b1918]">ANSH</span>
              <span className="text-[#7ea81d] font-bold">LED</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-[#4b4b4b] hover:text-[#1b1918]">
                About Us
              </a>
              <a href="#" className="text-[#4b4b4b] hover:text-[#1b1918]">
                Contact Us
              </a>
              <div className="flex items-center gap-1 text-[#4b4b4b] cursor-pointer">
                <span>Outdoor Lights</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#4b4b4b]">Customer Support</span>
            <Button variant="outline" className="border-[#7ea81d] text-[#7ea81d] hover:bg-[#7ea81d] hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Category Icons */}
      <div className="bg-[#f3f3f3] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            {[
              { name: "Street Lights", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Solar Street Lights", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Flood Lights", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Highboy Lights", icon: "/placeholder.svg?height=80&width=80" },
            ].map((category, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <img src={category.icon || "/placeholder.svg"} alt={category.name} width={60} height={60} />
                </div>
                <span className="text-[#4b4b4b] text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filter */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white border border-[#f3f3f3] rounded-lg p-6">
              <h3 className="font-semibold text-[#1b1918] mb-4">Filter</h3>

              <div className="mb-6">
                <h4 className="font-medium text-[#4b4b4b] mb-3">Package Of</h4>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <Checkbox id={`package-${num}`} />
                      <label htmlFor={`package-${num}`} className="text-[#4b4b4b] text-sm">
                        {num}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#4b4b4b] mb-3">Price</h4>
                <div className="space-y-2">
                  <div className="text-[#4b4b4b] text-sm">₹500-₹1000</div>
                  <div className="text-[#4b4b4b] text-sm">₹1000-₹2000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#1b1918]">
                Street Light <span className="text-[#868789] font-normal">(10 Products)</span>
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <Card key={index} className="border border-[#f3f3f3] hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-[#f3f3f3] rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=120&width=120"
                        alt="24 Watt LED Street Light"
                        width={120}
                        height={120}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="font-medium text-[#1b1918] mb-2">24 Watt LED Street Light</h3>
                    <p className="text-[#868789] text-sm mb-3">Pack of 1, 2, 4, 10</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#7ea81d] font-bold text-lg">₹899</span>
                    </div>
                    <Button className="w-full bg-[#7ea81d] hover:bg-[#6a9118] text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#7ea81d] font-semibold mb-4">Stay Updated</h4>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#505050] rounded flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-[#505050] rounded flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-[#505050] rounded flex items-center justify-center">
                  <span className="text-xs">G+</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[#7ea81d] font-semibold mb-4">Terms and Conditions</h4>
              <p className="text-[#868789] text-sm leading-relaxed">
                Figma ipsum component variant main layer. Rotate layout frame variant main layer. Figma ipsum. Overflow
                editor selection create star. Figma ipsum outline asset variant main layer. Figma variant variant
                comment stroke inspect ipsum. Overflow editor selection create star.
              </p>
            </div>

            <div>
              <h4 className="text-[#7ea81d] font-semibold mb-4">Navigate</h4>
              <div className="space-y-2">
                <div>
                  <a href="#" className="text-[#868789] hover:text-white text-sm">
                    Ansh LED {">"}
                  </a>
                </div>
                <div>
                  <a href="#" className="text-[#868789] hover:text-white text-sm">
                    About Us {">"}
                  </a>
                </div>
                <div>
                  <a href="#" className="text-[#868789] hover:text-white text-sm">
                    Contact Us {">"}
                  </a>
                </div>
                <div>
                  <a href="#" className="text-[#868789] hover:text-white text-sm">
                    Support {">"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
