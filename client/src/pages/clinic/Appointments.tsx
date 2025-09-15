import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ClinicNavigation from "@/components/clinic/ClinicNavigation";
import { 
  Plus, 
  Calendar, 
  Clock, 
  User,
  Phone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Import mock data
import appointments from "@/data/clinic/appointments.json";

const calendarDays = [
  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

const monthData = {
  name: "January 2024",
  days: Array.from({ length: 31 }, (_, i) => i + 1),
  startDay: 1 // Monday = 1, Tuesday = 2, etc.
};

export default function Appointments() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2024-01-16");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-700";
      case "scheduled": return "bg-blue-100 text-blue-700";
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "completed": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const todayAppointments = appointments.filter(apt => apt.date === selectedDate);

  return (
    <div className="flex h-screen bg-gray-50">
      <ClinicNavigation collapsed={collapsed} onCollapsedChange={setCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
              <p className="text-gray-600">Manage patient appointments and scheduling</p>
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Appointment
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{monthData.name}</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {calendarDays.map(day => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: monthData.startDay }, (_, i) => (
                    <div key={`empty-${i}`} className="p-2"></div>
                  ))}
                  
                  {/* Calendar days */}
                  {monthData.days.map(day => {
                    const dayString = `2024-01-${day.toString().padStart(2, '0')}`;
                    const dayAppointments = appointments.filter(apt => apt.date === dayString);
                    const isSelected = dayString === selectedDate;
                    const isToday = dayString === "2024-01-16";
                    
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(dayString)}
                        className={`p-2 text-sm rounded-lg transition-colors ${
                          isSelected 
                            ? "bg-purple-600 text-white" 
                            : isToday
                            ? "bg-purple-100 text-purple-700"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <div className="font-medium">{day}</div>
                        {dayAppointments.length > 0 && (
                          <div className={`text-xs mt-1 ${
                            isSelected ? "text-purple-200" : "text-purple-600"
                          }`}>
                            {dayAppointments.length} apt{dayAppointments.length !== 1 ? 's' : ''}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Today's Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {selectedDate === "2024-01-16" ? "Today's Appointments" : `Appointments for ${selectedDate}`}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No appointments scheduled</p>
                  ) : (
                    todayAppointments.map((appointment) => (
                      <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-medium text-gray-900">{appointment.patientName}</p>
                            <p className="text-sm text-gray-600">ID: {appointment.patientId}</p>
                          </div>
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {appointment.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <User className="w-4 h-4 mr-2" />
                            {appointment.doctor}
                          </div>
                          <p className="text-sm font-medium text-gray-700">{appointment.type}</p>
                          {appointment.notes && (
                            <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                              {appointment.notes}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex space-x-2 mt-3">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Phone className="w-3 h-3 mr-1" />
                            Call
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Appointments Summary */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>This Week's Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{appointments.filter(a => a.status === "scheduled").length}</p>
                  <p className="text-sm text-gray-600">Scheduled</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{appointments.filter(a => a.status === "confirmed").length}</p>
                  <p className="text-sm text-gray-600">Confirmed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">{appointments.filter(a => a.status === "pending").length}</p>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{appointments.length}</p>
                  <p className="text-sm text-gray-600">Total</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}