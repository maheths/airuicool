import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const inventoryData = [
  { id: 1, item: 'Life Vests', quantity: 500, location: 'Storage A', status: 'In Stock' },
  { id: 2, item: 'Oxygen Masks', quantity: 1000, location: 'Storage B', status: 'Low Stock' },
  { id: 3, item: 'First Aid Kits', quantity: 200, location: 'Storage C', status: 'In Stock' },
  { id: 4, item: 'Blankets', quantity: 800, location: 'Storage A', status: 'In Stock' },
  { id: 5, item: 'Headphones', quantity: 1500, location: 'Storage D', status: 'Overstocked' },
];

export function InventoryTable({ searchTerm }: { searchTerm: string }) {
  const filteredData = inventoryData.filter(
    (item) =>
      item.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.item}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}