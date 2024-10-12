const inventoryData = [
  { id: 1, item: 'Life Vests', quantity: 500, location: 'Storage A', status: 'In Stock' },
  { id: 2, item: 'Oxygen Masks', quantity: 1000, location: 'Storage B', status: 'Low Stock' },
  { id: 3, item: 'First Aid Kits', quantity: 200, location: 'Storage C', status: 'In Stock' },
  { id: 4, item: 'Blankets', quantity: 800, location: 'Storage A', status: 'In Stock' },
  { id: 5, item: 'Headphones', quantity: 1500, location: 'Storage D', status: 'Overstocked' },
];

const scheduleData = [
  { id: 1, flightNumber: 'AA123', departure: 'New York', arrival: 'London', date: '2023-06-15', status: 'On Time' },
  { id: 2, flightNumber: 'BA456', departure: 'London', arrival: 'Paris', date: '2023-06-15', status: 'Delayed' },
  { id: 3, flightNumber: 'LH789', departure: 'Frankfurt', arrival: 'Tokyo', date: '2023-06-16', status: 'On Time' },
  { id: 4, flightNumber: 'EK012', departure: 'Dubai', arrival: 'New York', date: '2023-06-16', status: 'On Time' },
  { id: 5, flightNumber: 'SQ345', departure: 'Singapore', arrival: 'Sydney', date: '2023-06-17', status: 'Cancelled' },
];

const passengerData = [
  { id: 1, name: 'John Doe', flightNumber: 'AA123', seat: '12A', status: 'Checked In' },
  { id: 2, name: 'Jane Smith', flightNumber: 'BA456', seat: '14B', status: 'Boarding' },
  { id: 3, name: 'Mike Johnson', flightNumber: 'LH789', seat: '22C', status: 'Not Checked In' },
  { id: 4, name: 'Sarah Williams', flightNumber: 'EK012', seat: '5D', status: 'Checked In' },
  { id: 5, name: 'Tom Brown', flightNumber: 'SQ345', seat: '18F', status: 'Cancelled' },
];

function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabName).classList.remove('hidden');
}

function renderTable(data, tableBodyId) {
  const tableBody = document.getElementById(tableBodyId);
  tableBody.innerHTML = '';
  data.forEach(item => {
    const row = document.createElement('tr');
    Object.values(item).slice(1).forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      cell.className = 'border px-4 py-2';
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
}

function filterData(data, searchTerm) {
  return data.filter(item => 
    Object.values(item).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
}

function initializeTables() {
  renderTable(inventoryData, 'inventoryTableBody');
  renderTable(scheduleData, 'scheduleTableBody');
  renderTable(passengerData, 'passengersTableBody');
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    renderTable(filterData(inventoryData, searchTerm), 'inventoryTableBody');
    renderTable(filterData(scheduleData, searchTerm), 'scheduleTableBody');
    renderTable(filterData(passengerData, searchTerm), 'passengersTableBody');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeTables();
  setupSearch();
});