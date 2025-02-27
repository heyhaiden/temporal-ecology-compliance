
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Reports = () => {
  const [userName, setUserName] = useState("Demo User");
  const [loading, setLoading] = useState(true);
  const [reportType, setReportType] = useState("summary");
  const [dateRange, setDateRange] = useState("May 01, 2023 - May 31, 2023");
  const [dataType, setDataType] = useState("all");

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUserName(session.user.email?.split('@')[0] || "User");
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadUserData();
  }, []);

  const handleGenerateReport = () => {
    toast.success("Report generation started. You will be notified when it's ready.");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading reports...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout userName={userName}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Generate Report</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Report Type
                  </label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="summary">Summary Report</SelectItem>
                      <SelectItem value="detailed">Detailed Report</SelectItem>
                      <SelectItem value="species">Species Report</SelectItem>
                      <SelectItem value="environment">Environmental Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date Range
                  </label>
                  <div className="relative">
                    <Input 
                      type="text" 
                      value={dateRange} 
                      onChange={(e) => setDateRange(e.target.value)}
                      className="pl-10"
                    />
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data Types
                  </label>
                  <Select value={dataType} onValueChange={setDataType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select data types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Data</SelectItem>
                      <SelectItem value="audio">Audio Only</SelectItem>
                      <SelectItem value="environment">Environment Only</SelectItem>
                      <SelectItem value="species">Species Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  className="bg-black text-white hover:bg-gray-800" 
                  onClick={handleGenerateReport}
                >
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Summary Statistics</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Total Detections</p>
                  <p className="text-xl font-semibold">1,234</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Temperature</p>
                  <p className="text-xl font-semibold">22°C</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Humidity</p>
                  <p className="text-xl font-semibold">65%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Most Active Species</p>
                  <p className="text-xl font-semibold">Common Pipistrelle (42% of detections)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
