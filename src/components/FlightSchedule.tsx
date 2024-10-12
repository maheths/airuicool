import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const scheduleData = [
  { id: 1, flightNumber: 'AA123', departure: 'New York', arrival: 'London', date: '2023-06-15', status: 'On Time' },
  { id: 2, flightNumber: 'BA456', departure: 'London', arrival: 'Paris', date: '2023-06-15', status: 'Delayed' },
  { id: 3, flightNumber: 'LH789', departure: 'Frankfurt', arrival: 'Tokyo', date: '2023-06-16', status: 'On Time' },
  { id: 4, flightNumber: 'EK012', departure: 'Dubai', arrival: 'New York', date: '2023-06-16', status: 'On Time' },
  { id: 5, flightNumber: 'SQ345', departure: 'Singapore', arrival: 'Sydney', date: '2023-06-17', status: 'Cancelled' },
];

export function FlightSchedule({ searchTerm }: { searchTerm: string }) {
  const filteredData = scheduleData.filter(
    (flight) =>
      flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.arrival.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Flight Number</TableHead>
          <TableHead>Departure</TableHead>
          <TableHead>Arrival</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.map((flight) => (
          <TableRow key={flight.id}>
            <TableCell>{flight.flightNumber}</TableCell>
            <TableCell>{flight.departure}</TableCell>
            <TableCell>{flight.arrival}</TableCell>
            <TableCell>{flight.date}</TableCell>
            <TableCell>{flight.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}