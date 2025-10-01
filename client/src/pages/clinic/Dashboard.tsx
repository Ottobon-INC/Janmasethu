import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ClinicNavigation from "@/components/clinic/ClinicNavigation";
import { 
  Search, 
  Bell, 
  User, 
  TrendingUp, 
  Calendar, 
  Users, 
  Target,
  MoreVertical,
  Phone,
  Mail,
  CheckCircle
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

// Import mock data
import tasks from "@/data/clinic/tasks.json";
import leads from "@/data/clinic/leads.json";
import appointments from "@/data/clinic/appointments.json";

const appointmentTrendData = [
  { name: "Mon", appointments: 8 },
  { name: "Tue", appointments: 12 },
  { name: "Wed", appointments: 10 },
  { name: "Thu", appointments: 15 },
  { name: "Fri", appointments: 18 },
  { name: "Sat", appointments: 6 },
  { name: "Sun", appointments: 3 }
];

const conversionData = [
  { name: "Leads", value: 45 },
  { name: "Qualified", value: 32 },
  { name: "Consulted", value: 24 },
  { name: "Converted", value: 16 }
];

export default function ClinicDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate metrics
  const newLeads = leads.filter(lead => lead.status === "new").length;
  const todayAppointments = appointments.filter(apt => apt.date === "2024-01-16").length;
  const conversionRate = Math.round((leads.filter(lead => lead.status === "qualified").length / leads.length) * 100);
  const activePatients = 120; // Mock data

  const priorityTasks = tasks.filter(task => task.priority === "high" && task.status === "pending");

  return (
    <div className="flex h-screen bg-gray-50">
      <ClinicNavigation collapsed={collapsed} onCollapsedChange={setCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Dr. Rao</h1>
              <p className="text-gray-600">Here's what's happening at your clinic today</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="search"
                  placeholder="Search patients, appointments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80 rounded-lg border-gray-200"
                />
              </div>
              
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              
              {/* Profile */}
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-purple-600" />
                </div>
                <span className="font-medium">Dr. Rao</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">New Leads</p>
                    <p className="text-3xl font-bold">{newLeads}</p>
                    <p className="text-blue-100 text-xs">+12% from last week</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-100" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Appointments Today</p>
                    <p className="text-3xl font-bold">{todayAppointments}</p>
                    <p className="text-green-100 text-xs">3 pending confirmation</p>
                  </div>
                  <Calendar className="w-8 h-8 text-green-100" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Conversion Rate</p>
                    <p className="text-3xl font-bold">{conversionRate}%</p>
                    <p className="text-purple-100 text-xs">+5% from last month</p>
                  </div>
                  <Target className="w-8 h-8 text-purple-100" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium">Active Patients</p>
                    <p className="text-3xl font-bold">{activePatients}</p>
                    <p className="text-orange-100 text-xs">8 new this week</p>
                  </div>
                  <Users className="w-8 h-8 text-orange-100" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Tasks Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Appointment Trends */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Weekly Appointment Trends
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={appointmentTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="appointments" 
                      stroke="#7C3AED" 
                      strokeWidth={3}
                      dot={{ fill: "#7C3AED", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Priority Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Priority Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {priorityTasks.slice(0, 4).map((task) => (
                    <div key={task.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-900">{task.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{task.description}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            task.priority === "high" ? "bg-red-100 text-red-700" :
                            task.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                            "bg-green-100 text-green-700"
                          }`}>
                            {task.priority}
                          </span>
                          <span className="text-xs text-gray-500">{task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lead Conversion Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Lead Conversion Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={conversionData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#7C3AED" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}