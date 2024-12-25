import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import DepartmentList from './components/DepartmentList';
import AddDepartment from './components/AddDepartment';
import AttendanceList from './components/AttendanceList';
import AddAttendance from './components/AddAttendance';

function Home() {
    return (
        <div>
            <h1>Welcome to the HR Management System</h1>
            <div>
                <button>
                    <Link to="/add-employee">Add Employee</Link>
                </button>
                <button>
                    <Link to="/view-employees">View Employee Details</Link>
                </button>
                <button>
                    <Link to="/add-department">Add Department</Link>
                </button>
                <button>
                    <Link to="/view-departments">View Department Details</Link>
                </button>
                <button>
                    <Link to="/add-attendance">Add Attendance</Link>
                </button>
                <button>
                    <Link to="/view-attendance">View Attendance Records</Link>
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home page */}
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="/view-employees" element={<EmployeeList />} />
                    <Route path="/add-department" element={<AddDepartment />} />
                    <Route path="/view-departments" element={<DepartmentList />} />
                    <Route path="/add-attendance" element={<AddAttendance />} />
                    <Route path="/view-attendance" element={<AttendanceList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
