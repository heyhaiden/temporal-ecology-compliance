
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Reports = () => {
  const summaryStats = [
    { label: "Total Detections", value: "1,234" },
    { label: "Average Temperature", value: "22°C" },
    { label: "Average Humidity", value: "65%" },
    { label: "Most Active Species", value: "Common Pipistrelle (42% of detections)" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Reports</h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-6">Generate Report</h2>
          <div className="grid gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Report Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Summary Report" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summary">Summary Report</SelectItem>
                  <SelectItem value="detailed">Detailed Report</SelectItem>
                  <SelectItem value="custom">Custom Report</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Date Range</label>
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" />
                <Input type="date" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Data Types</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Data" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Data</SelectItem>
                  <SelectItem value="detections">Detections Only</SelectItem>
                  <SelectItem value="environment">Environmental Data Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="bg-black hover:bg-gray-800">Generate Report</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-6">Summary Statistics</h2>
          <div className="grid gap-4">
            {summaryStats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                <span className="text-gray-600">{stat.label}</span>
                <span className="font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
