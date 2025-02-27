
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Trash2, Edit, Laptop, Info, ActivitySquare, RefreshCw, Wifi, Battery } from "lucide-react";
import { toast } from "sonner";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Devices = () => {
  // Sample devices data
  const [devices, setDevices] = useState([
    { 
      id: 1, 
      name: "BatBox-1", 
      type: "Acoustic Monitor",
      serialNumber: "BAT0001",
      location: "Forest Edge",
      coordinates: "51.5074° N, 0.1278° W",
      installDate: "2023-05-15",
      batteryLevel: "85%",
      status: "online",
      lastPing: "2 mins ago",
      notes: "Monitoring bat activity near the forest edge. Good signal strength and battery performance."
    },
    { 
      id: 2, 
      name: "BatBox-2", 
      type: "Acoustic Monitor",
      serialNumber: "BAT0002",
      location: "Lakeside",
      coordinates: "51.5080° N, 0.1290° W",
      installDate: "2023-06-03",
      batteryLevel: "67%",
      status: "online",
      lastPing: "15 mins ago",
      notes: "Positioned near the lake to monitor water-adjacent bat activity."
    },
    { 
      id: 3, 
      name: "BirdBox-1", 
      type: "Visual Monitor",
      serialNumber: "BIRD0001",
      location: "Oak Tree",
      coordinates: "51.5090° N, 0.1270° W",
      installDate: "2023-04-22",
      batteryLevel: "12%",
      status: "offline",
      lastPing: "2 hours ago",
      notes: "Battery replacement needed. Located in the large oak tree near the eastern trail."
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [newDevice, setNewDevice] = useState({
    name: "",
    type: "",
    serialNumber: "",
    location: "",
    coordinates: "",
    installDate: "",
    notes: ""
  });

  const handleAddDevice = () => {
    if (!newDevice.name || !newDevice.serialNumber) {
      toast.error("Device name and serial number are required");
      return;
    }

    const device = {
      id: devices.length + 1,
      ...newDevice,
      batteryLevel: "100%",
      status: "offline",
      lastPing: "Never"
    };

    setDevices([...devices, device]);
    setNewDevice({
      name: "",
      type: "",
      serialNumber: "",
      location: "",
      coordinates: "",
      installDate: "",
      notes: ""
    });
    setIsAddDialogOpen(false);
    toast.success(`Device ${device.name} added successfully`);
  };

  const handleDeleteDevice = () => {
    if (selectedDevice) {
      setDevices(devices.filter(device => device.id !== selectedDevice.id));
      setIsDeleteDialogOpen(false);
      setSelectedDevice(null);
      toast.success(`Device ${selectedDevice.name} removed`);
    }
  };

  const confirmDelete = (device) => {
    setSelectedDevice(device);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Devices</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Device
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Add New Device</DialogTitle>
              <DialogDescription>
                Enter the details for the new monitoring device.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Device Name</label>
                  <Input 
                    id="name" 
                    value={newDevice.name}
                    onChange={(e) => setNewDevice({...newDevice, name: e.target.value})}
                    placeholder="e.g., BatBox-3" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium">Device Type</label>
                  <Input 
                    id="type" 
                    value={newDevice.type}
                    onChange={(e) => setNewDevice({...newDevice, type: e.target.value})}
                    placeholder="e.g., Acoustic Monitor" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="serialNumber" className="text-sm font-medium">Serial Number</label>
                  <Input 
                    id="serialNumber" 
                    value={newDevice.serialNumber}
                    onChange={(e) => setNewDevice({...newDevice, serialNumber: e.target.value})}
                    placeholder="e.g., BAT0003" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="installDate" className="text-sm font-medium">Install Date</label>
                  <Input 
                    id="installDate" 
                    type="date" 
                    value={newDevice.installDate}
                    onChange={(e) => setNewDevice({...newDevice, installDate: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">Location</label>
                  <Input 
                    id="location" 
                    value={newDevice.location}
                    onChange={(e) => setNewDevice({...newDevice, location: e.target.value})}
                    placeholder="e.g., North Field" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="coordinates" className="text-sm font-medium">Coordinates</label>
                  <Input 
                    id="coordinates" 
                    value={newDevice.coordinates}
                    onChange={(e) => setNewDevice({...newDevice, coordinates: e.target.value})}
                    placeholder="e.g., 51.5074° N, 0.1278° W" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">Notes</label>
                <Textarea 
                  id="notes" 
                  value={newDevice.notes}
                  onChange={(e) => setNewDevice({...newDevice, notes: e.target.value})}
                  placeholder="Additional information about the device..." 
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleAddDevice}>Add Device</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Devices</TabsTrigger>
          <TabsTrigger value="online">Online</TabsTrigger>
          <TabsTrigger value="offline">Offline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map(device => (
              <Card key={device.id} className="overflow-hidden">
                <CardHeader className={`${device.status === 'online' ? 'bg-emerald-50' : 'bg-gray-50'} pb-4`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{device.name}</CardTitle>
                      <CardDescription>{device.type}</CardDescription>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      device.status === 'online' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {device.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Info className="h-4 w-4 mr-2" />
                        <span>Serial</span>
                      </div>
                      <span className="text-sm font-medium">{device.serialNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Laptop className="h-4 w-4 mr-2" />
                        <span>Location</span>
                      </div>
                      <span className="text-sm font-medium">{device.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Battery className="h-4 w-4 mr-2" />
                        <span>Battery</span>
                      </div>
                      <span className={`text-sm font-medium ${
                        parseInt(device.batteryLevel) < 20 ? 'text-red-600' : 'text-gray-800'
                      }`}>
                        {device.batteryLevel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <ActivitySquare className="h-4 w-4 mr-2" />
                        <span>Last Ping</span>
                      </div>
                      <span className="text-sm font-medium">{device.lastPing}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-3">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Edit className="h-3.5 w-3.5 mr-1.5" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
                    <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                    Ping
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    onClick={() => confirmDelete(device)}
                  >
                    <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="online" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.filter(device => device.status === 'online').map(device => (
              <Card key={device.id} className="overflow-hidden">
                {/* Same card content as "all" tab */}
                <CardHeader className="bg-emerald-50 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{device.name}</CardTitle>
                      <CardDescription>{device.type}</CardDescription>
                    </div>
                    <div className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                      {device.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Info className="h-4 w-4 mr-2" />
                        <span>Serial</span>
                      </div>
                      <span className="text-sm font-medium">{device.serialNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Laptop className="h-4 w-4 mr-2" />
                        <span>Location</span>
                      </div>
                      <span className="text-sm font-medium">{device.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Battery className="h-4 w-4 mr-2" />
                        <span>Battery</span>
                      </div>
                      <span className="text-sm font-medium">{device.batteryLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <ActivitySquare className="h-4 w-4 mr-2" />
                        <span>Last Ping</span>
                      </div>
                      <span className="text-sm font-medium">{device.lastPing}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-3">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Edit className="h-3.5 w-3.5 mr-1.5" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
                    <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                    Ping
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    onClick={() => confirmDelete(device)}
                  >
                    <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="offline" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.filter(device => device.status === 'offline').map(device => (
              <Card key={device.id} className="overflow-hidden">
                {/* Same card content as "all" tab but for offline devices */}
                <CardHeader className="bg-gray-50 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{device.name}</CardTitle>
                      <CardDescription>{device.type}</CardDescription>
                    </div>
                    <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                      {device.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Info className="h-4 w-4 mr-2" />
                        <span>Serial</span>
                      </div>
                      <span className="text-sm font-medium">{device.serialNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Laptop className="h-4 w-4 mr-2" />
                        <span>Location</span>
                      </div>
                      <span className="text-sm font-medium">{device.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Battery className="h-4 w-4 mr-2" />
                        <span>Battery</span>
                      </div>
                      <span className={`text-sm font-medium ${
                        parseInt(device.batteryLevel) < 20 ? 'text-red-600' : 'text-gray-800'
                      }`}>
                        {device.batteryLevel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <ActivitySquare className="h-4 w-4 mr-2" />
                        <span>Last Ping</span>
                      </div>
                      <span className="text-sm font-medium">{device.lastPing}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-3">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Edit className="h-3.5 w-3.5 mr-1.5" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
                    <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                    Ping
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    onClick={() => confirmDelete(device)}
                  >
                    <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Delete confirmation dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Remove Device</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove {selectedDevice?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteDevice}>Remove Device</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Devices;
