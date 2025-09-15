import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ClinicNavigation from "@/components/clinic/ClinicNavigation";
import { 
  Download, 
  FileText, 
  BarChart3, 
  TrendingUp,
  Calendar,
  Filter
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const monthlyData = [
  { month: "Sep", leads: 45, consultations: 32, conversions: 16 },
  { month: "Oct", leads: 52, consultations: 38, conversions: 22 },
  { month: "Nov", leads: 48, consultations: 35, conversions: 18 },
  { month: "Dec", leads: 58, consultations: 42, conversions: 26 },
  { month: "Jan", leads: 64, consultations: 48, conversions: 30 }
];

const treatmentData = [
  { name: "IVF", value: 45, color: "#7C3AED" },
  { name: "IUI", value: 30, color: "#C4B5FD" },
  { name: "ICSI", value: 15, color: "#3B82F6" },
  { name: "Other", value: 10, color: "#10B981" }
];

const outcomeData = [
  { month: "Sep", successRate: 32 },
  { month: "Oct", successRate: 35 },
  { month: "Nov", successRate: 28 },
  { month: "Dec", successRate: 42 },
  { month: "Jan", successRate: 38 }
];

export default function Reports() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedReport, setSelectedReport] = useState("monthly");
  const [selectedPeriod, setSelectedPeriod] = useState("last6months");

  return (
    <div className="flex h-screen bg-gray-50">
      <ClinicNavigation collapsed={collapsed} onCollapsedChange={setCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
              <p className="text-gray-600">Track performance and generate insights</p>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                <select 
                  value={selectedReport}
                  onChange={(e) => setSelectedReport(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white"
                >
                  <option value="monthly">Monthly Overview</option>
                  <option value="outcomes">Treatment Outcomes</option>
                  <option value="financial">Financial Summary</option>
                  <option value="patient">Patient Demographics</option>
                </select>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
                <select 
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white"
                >
                  <option value="last3months">Last 3 Months</option>
                  <option value="last6months">Last 6 Months</option>
                  <option value="lastyear">Last Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-end">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Patients</p>
                    <p className="text-3xl font-bold text-gray-900">248</p>
                    <p className="text-xs text-green-600">+12% vs last period</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-3xl font-bold text-gray-900">38%</p>
                    <p className="text-xs text-green-600">+3% vs last period</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">₹32L</p>
                    <p className="text-xs text-green-600">+8% vs last period</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg. Cycle Time</p>
                    <p className="text-3xl font-bold text-gray-900">42</p>
                    <p className="text-xs text-gray-600">days</p>
                  </div>
                  <Calendar className="w-8 h-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Lead Conversion Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Lead Conversion Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2} name="Leads" />
                    <Line type="monotone" dataKey="consultations" stroke="#7C3AED" strokeWidth={2} name="Consultations" />
                    <Line type="monotone" dataKey="conversions" stroke="#10B981" strokeWidth={2} name="Conversions" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Treatment Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Treatment Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={treatmentData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {treatmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Success Rate Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Treatment Success Rate Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={outcomeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="successRate" fill="#7C3AED" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Report Summary */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Report Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Insights</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Lead volume increased by 12% compared to previous period</li>
                    <li>• IVF treatments showed highest success rate at 45%</li>
                    <li>• Average patient age is 31 years</li>
                    <li>• Peak consultation hours are 10 AM - 2 PM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Focus marketing efforts on 28-35 age demographic</li>
                    <li>• Optimize appointment scheduling for peak hours</li>
                    <li>• Enhance IUI protocols to improve success rates</li>
                    <li>• Implement patient education programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
        </Card>
        </main>
      </div>
    </div>
  );
}