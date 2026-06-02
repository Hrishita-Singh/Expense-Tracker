import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import BudgetPlanner from "./pages/BudgetPlanner";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/income" element={<ProtectedRoute><Income /></ProtectedRoute>} />
      <Route path="/expense" element={<ProtectedRoute><Expense /></ProtectedRoute>} />
      <Route path="/transactions" element={<ProtectedRoute><Transactions/></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
      <Route path="/budget-planner" element={<ProtectedRoute><BudgetPlanner /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>} />

    </Routes>
  );
}

export default App;