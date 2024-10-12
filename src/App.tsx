import { useState } from 'react';
import { Plane, Luggage, Users, Calendar, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InventoryTable } from '@/components/InventoryTable';
import { FlightSchedule } from '@/components/FlightSchedule';
import { PassengerList } from '@/components/PassengerList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Airline Inventory Management</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <Button variant="outline"><Plane className="mr-2 h-4 w-4" /> Flights</Button>
          <Button variant="outline"><Luggage className="mr-2 h-4 w-4" /> Inventory</Button>
          <Button variant="outline"><Users className="mr-2 h-4 w-4" /> Passengers</Button>
          <Button variant="outline"><Calendar className="mr-2 h-4 w-4" /> Schedule</Button>
        </div>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Button variant="ghost"><Search className="h-4 w-4" /></Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Flights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">247</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Available Seats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,893</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cargo Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12,500 kg</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="inventory" className="w-full">
        <TabsList>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="schedule">Flight Schedule</TabsTrigger>
          <TabsTrigger value="passengers">Passenger List</TabsTrigger>
        </TabsList>
        <TabsContent value="inventory">
          <InventoryTable searchTerm={searchTerm} />
        </TabsContent>
        <TabsContent value="schedule">
          <FlightSchedule searchTerm={searchTerm} />
        </TabsContent>
        <TabsContent value="passengers">
          <PassengerList searchTerm={searchTerm} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;