import { ColDef } from "ag-grid-community";

interface TeamMember {
  name: string;
  role: string;
  experience: number;
  salary: number;
}

const engineeringTeam: TeamMember[] = [
  {
    name: "John Doe",
    role: "Software Engineer",
    experience: 5,
    salary: 4000,
  },
  {
    name: "Jane Smith",
    role: "Frontend Developer",
    experience: 3,
    salary: 4000,
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    experience: 7,
    salary: 4000,
  },
  {
    name: "Sarah Williams",
    role: "UI/UX Designer",
    experience: 4,
    salary: 4000,
  },
  {
    name: "David Lee",
    role: "DevOps Engineer",
    experience: 6,
    salary: 4000,
  },
  {
    name: "Emily Brown",
    role: "Software Engineer",
    experience: 4,
    salary: 4000,
  },
  {
    name: "Michael Davis",
    role: "Frontend Developer",
    experience: 2,
    salary: 4000,
  },
  {
    name: "Jessica Wilson",
    role: "Backend Developer",
    experience: 8,
    salary: 4000,
  },
  {
    name: "Andrew Thompson",
    role: "UI/UX Designer",
    experience: 6,
    salary: 4000,
  },
  {
    name: "Olivia Martinez",
    role: "DevOps Engineer",
    experience: 3,
    salary: 4000,
  },
  {
    name: "Daniel Taylor",
    role: "Software Engineer",
    experience: 7,
    salary: 4000,
  },
  {
    name: "Sophia Anderson",
    role: "Frontend Developer",
    experience: 5,
    salary: 4000,
  },
  {
    name: "Matthew Thomas",
    role: "Backend Developer",
    experience: 4,
    salary: 4000,
  },
  {
    name: "Ava Hernandez",
    role: "UI/UX Designer",
    experience: 2,
    salary: 4000,
  },
  {
    name: "James Moore",
    role: "DevOps Engineer",
    experience: 9,
    salary: 4000,
  },
  {
    name: "Emma Clark",
    role: "Software Engineer",
    experience: 3,
    salary: 4000,
  },
];

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const columnDefs: ColDef[] = [
  { headerName: "Name", field: "name" },
  { headerName: "Role", field: "role" },
  { headerName: "Experience", field: "experience" },
  {
    headerName: "Salary",
    field: "salary",
    editable: true,
    valueFormatter: (params) => `${USDollar.format(params.value)}`,
  },
];

export { engineeringTeam, columnDefs };
