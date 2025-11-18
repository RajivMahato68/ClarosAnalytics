interface DataItem {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}

export const sampleData: DataItem[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinDate: '2024-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive', joinDate: '2024-03-10' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active', joinDate: '2024-04-05' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Admin', status: 'Active', joinDate: '2024-05-12' },
];