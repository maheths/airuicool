import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const passengerData = [
  { id: 1, name: 'John Doe', flightNumber: 'AA123', seat: '12A', status: 'Checked In' },
  { id: 2, name: 'Jane Smith', flightNumber: 'BA456', seat: '14B', status: 'Boarding' },
  { id: 3, name: 'Mike Johnson', flightNumber: 'LH789', seat: '22C', status: 'Not Checked In' },
  { id: 4, name: 'Sarah Williams', flightNumber: 'EK012', seat: '5D', status: 'Checked In' },
  { id: 5, name: 'Tom Brown', flightNumber: 'SQ345', seat: '18F', status: 'Cancelled' },
];

export function PassengerList({ searchTerm }: { searchTerm: string }) {
  const filteredData = passengerData.filter(
    (passenger) =>
      passenger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      passenger.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      passenger.seat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      passenger.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Flight Number</TableHead>
          <TableHead>Seat</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.map((passenger) => (
          <TableRow key={passenger.id}>
            <TableCell>{passenger.name}</TableCell>
            <TableCell>{passenger.flightNumber}</TableCell>
            <TableCell>{passenger.seat}</TableCell>
            <TableCell>{passenger.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}