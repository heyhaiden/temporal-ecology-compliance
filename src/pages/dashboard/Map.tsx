
import { Card } from "@/components/ui/card";

const Map = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Map</h1>
      
      <Card className="p-6">
        <div className="h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
          <p className="text-gray-500">Map will be displayed here</p>
        </div>
      </Card>
    </div>
  );
};

export default Map;
