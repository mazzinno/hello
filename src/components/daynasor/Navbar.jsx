import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Chart component from shadcn

const Navbar = () => {

  // Mock data for partners
  const partners = [{ name: "Segment" }, { name: "Asana" }, { name: "Intercom" }, { name: "Gong" }, { name: "HubSpot" }]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-br from-purple-100/20 to-indigo-200/30 -z-10"></div>

      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 md:px-12 relative z-10">
        <div className="flex items-center">
          <div className="bg-blue-500 w-8 h-8 rounded mr-2"></div>
          <span className="text-slate-800 font-semibold text-xl">Clearbit</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <div className="flex items-center text-slate-700 cursor-pointer">
            Solutions <ChevronDown className="ml-1 h-4 w-4" />
          </div>
          <div className="text-slate-700 cursor-pointer">Platform</div>
          <div className="text-slate-700 cursor-pointer">Customers</div>
          <div className="flex items-center text-slate-700 cursor-pointer">
            Company <ChevronDown className="ml-1 h-4 w-4" />
          </div>
          <div className="flex items-center text-slate-700 cursor-pointer">
            Resources <ChevronDown className="ml-1 h-4 w-4" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-slate-700">
            Login
          </Button>
          <Button variant="outline" className="text-slate-700 border-slate-700">
            Get started
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Hero Text */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-8">
              Predictable
              <br />
              growth starts
              <br />
              here.
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mb-10">
              Clearbit gives you full context on every person and company in your target market so you can reach and
              convert more customers, more predictably.
            </p>
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-6 text-lg">Get Started</Button>
          </div>

          {/* Dashboard Card */}
          <Card className="lg:w-2/5 shadow-xl">
            <CardHeader className="pb-0">
              <div className="flex items-center">
                <div className="bg-slate-200 w-6 h-6 rounded mr-2"></div>
                <div className="flex items-center">
                  <div className="bg-slate-700 w-5 h-5 rounded mr-2"></div>
                  <span className="font-medium">Company Co.</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-4">
              <Tabs defaultValue="companies">
                <TabsList className="w-full justify-start border-b pb-0 mb-6">
                  <TabsTrigger
                    value="companies"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none"
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-500 w-3 h-3 rounded-full mr-2"></div>
                      <span>New companies</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="people"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none"
                  >
                    <div className="flex items-center">
                      <div className="bg-slate-400 w-3 h-3 rounded-full mr-2"></div>
                      <span>New people</span>
                    </div>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="companies" className="mt-0">
                  <div className="h-[200px] w-full mb-6 bg-white relative">
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                      {Array(24)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="border-t border-l border-slate-100"></div>
                        ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm text-slate-500 mb-3">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-normal">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>
                        B2B
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-normal">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>
                        United States
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-normal">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>
                        500+ Employees
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm text-slate-500 mb-3">Recent Activity</h4>
                    <div className="grid grid-cols-3 text-xs text-slate-400 mb-2">
                      <span>Company</span>
                      <span>Size</span>
                      <span>Industry</span>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <div className="flex items-center">
                        <div className="bg-slate-200 w-4 h-4 rounded-full mr-2"></div>
                        <span className="text-sm">Acme</span>
                      </div>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="people">
                  <div className="h-[200px] flex items-center justify-center text-slate-400">
                    People data visualization
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Partners Section */}
        <div className="mt-24 text-center">
          <p className="text-slate-600 mb-8">Clearbit is behind the worlds fastest-growing companies</p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-slate-500 font-semibold text-lg opacity-70">
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Navbar;