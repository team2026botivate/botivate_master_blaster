'use client';

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  TrendingDown,
} from "lucide-react";

/* ============================================================
   📌 DATA TYPES
   ============================================================ */
interface DepartmentTask {
  id: string;
  department: string;
  taskName: string;
  assignedTo: string;
  status: "on-time" | "delayed" | "pending" | "completed";
  dueDate: string;
  priority: "high" | "medium" | "low";
}

interface ApprovalRequest {
  id: string;
  type: "PO" | "Leave" | "Decision";
  title: string;
  requestedBy: string;
  department: string;
  date: string;
  amount?: number;
}

/* ============================================================
   📌 DUMMY DATA
   ============================================================ */
const mockDepartmentTasks: DepartmentTask[] = [
  { id: "1", department: "Sales", taskName: "Q4 Sales Report", assignedTo: "Rajesh Kumar", status: "on-time", dueDate: "2024-11-25", priority: "high" },
  { id: "2", department: "Sales", taskName: "Client Proposal - Acme Corp", assignedTo: "Priya Sharma", status: "delayed", dueDate: "2024-11-20", priority: "high" },
  { id: "3", department: "Sales", taskName: "CRM Data Update", assignedTo: "Amit Patel", status: "pending", dueDate: "2024-11-22", priority: "medium" },
  { id: "4", department: "Marketing", taskName: "Campaign Performance Analysis", assignedTo: "Neha Singh", status: "on-time", dueDate: "2024-11-26", priority: "medium" },
  { id: "5", department: "Marketing", taskName: "Social Media Content Calendar", assignedTo: "Rahul Verma", status: "completed", dueDate: "2024-11-21", priority: "low" },
  { id: "6", department: "Operations", taskName: "Inventory Audit", assignedTo: "Suresh Reddy", status: "delayed", dueDate: "2024-11-19", priority: "high" },
];

const mockApprovals: ApprovalRequest[] = [
  { id: "1", type: "PO", title: "Purchase Order - Raw Materials", requestedBy: "Suresh Reddy", department: "Purchase", date: "2024-11-22", amount: 150000 },
  { id: "2", type: "Leave", title: "Annual Leave Request", requestedBy: "Priya Sharma", department: "Sales", date: "2024-11-22" },
  { id: "3", type: "PO", title: "Purchase Order - Office Equipment", requestedBy: "Admin Team", department: "Admin", date: "2024-11-21", amount: 45000 },
  { id: "4", type: "Decision", title: "New Vendor Approval", requestedBy: "Amit Patel", department: "Purchase", date: "2024-11-22" },
  { id: "5", type: "Leave", title: "Medical Leave Request", requestedBy: "Rahul Verma", department: "Marketing", date: "2024-11-21" },
];


const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.01 }}
    className={`bg-white/80 backdrop-blur-lg border border-gray-200 shadow-sm rounded-2xl p-6 transition-all ${className}`}
  >
    {children}
  </motion.div>
);

const StatCard = ({
  icon,
  value,
  label,
  iconColor,
}: {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  iconColor: string;
}) => (
  <GlassCard>
    <div className="flex justify-between">
      <div>
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <p className="text-sm mt-1 text-gray-600">{label}</p>
      </div>

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconColor}`}
      >
        {icon}
      </div>
    </div>
  </GlassCard>
);

const ApprovalBadgeColor = {
  PO: "bg-purple-100 text-purple-700",
  Leave: "bg-blue-100 text-blue-700",
  Decision: "bg-orange-100 text-orange-700",
};

/* ============================================================
   📌 MAIN ADMIN DASHBOARD COMPONENT
   ============================================================ */
export default function AdminDashboard() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departments = ["all", ...new Set(mockDepartmentTasks.map((t) => t.department))];

  const filteredTasks =
    selectedDepartment === "all"
      ? mockDepartmentTasks
      : mockDepartmentTasks.filter((t) => t.department === selectedDepartment);

  const delayedTasks = filteredTasks.filter((t) => t.status === "delayed");
  const pendingTasks = filteredTasks.filter((t) => t.status === "pending");
  const completedTasks = filteredTasks.filter((t) => t.status === "completed");

  const statusChip = {
    completed: "bg-green-100 text-green-700",
    "on-time": "bg-blue-100 text-blue-700",
    pending: "bg-orange-100 text-orange-700",
    delayed: "bg-red-100 text-red-700",
  };

  const priorityChip = {
    high: "bg-red-100 text-red-700",
    medium: "bg-orange-100 text-orange-700",
    low: "bg-green-100 text-green-700",
  };

  return (
    <div className=" space-y-10 ">

      {/* HEADER */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-semibold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Department Head Overview</p>
      </motion.div>

      {/* ======================= METRICS ======================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          value="24"
          label="Team Members"
          icon={<Users className="w-6 h-6 text-blue-600" />}
          iconColor="bg-blue-100"
        />

        <StatCard
          value={delayedTasks.length}
          label="Delayed Tasks"
          icon={<TrendingDown className="w-6 h-6 text-red-600" />}
          iconColor="bg-red-100"
        />

        <StatCard
          value={pendingTasks.length}
          label="Pending Tasks"
          icon={<Clock className="w-6 h-6 text-orange-600" />}
          iconColor="bg-orange-100"
        />

        <StatCard
          value={completedTasks.length}
          label="Completed Today"
          icon={<CheckCircle className="w-6 h-6 text-green-600" />}
          iconColor="bg-green-100"
        />
      </div>

      {/* ======================= PENDING APPROVALS ======================= */}
      <GlassCard>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl text-gray-900">Pending Approvals</h3>
          </div>

          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
            {mockApprovals.length} pending
          </span>
        </div>

        <div className="space-y-4">
          {mockApprovals.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              className="border border-gray-200 rounded-xl p-5 hover:border-blue-400 transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-1">
                  <div className="flex gap-2 items-center">
                    <span
                      className={`px-2 py-1 text-xs rounded ${ApprovalBadgeColor[item.type]}`}
                    >
                      {item.type}
                    </span>

                    <h4 className="text-gray-900 font-medium">{item.title}</h4>
                  </div>

                  <div className="flex gap-5 text-sm text-gray-600 mt-1">
                    <span>Requested by: {item.requestedBy}</span>
                    <span>Dept: {item.department}</span>
                    <span>
                      Date: {new Date(item.date).toLocaleDateString()}
                    </span>
                    {item.amount && (
                      <span>Amount: ₹{item.amount.toLocaleString()}</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200">
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200">
                    Reject
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* ======================= DEPARTMENT TASKS ======================= */}
      <GlassCard>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl text-gray-900">Department Tasks</h3>

          {/* FILTER */}
          <div className="flex gap-2">
            {departments.map((dept) => (
              <motion.button
                key={dept}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3 py-1 rounded-lg text-sm capitalize transition-all ${
                  selectedDepartment === dept
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {dept}
              </motion.button>
            ))}
          </div>
        </div>

        {delayedTasks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
          >
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <div>
                <p className="text-red-900 font-medium">
                  {delayedTasks.length} delayed task(s) require immediate attention
                </p>
                <p className="text-sm text-red-700 mt-1">
                  Review overdue items and take corrective actions
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ======================= TABLE ======================= */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-600">
                <th className="py-3 px-4 text-left">Task Name</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Assigned To</th>
                <th className="py-3 px-4 text-left">Due Date</th>
                <th className="py-3 px-4 text-left">Priority</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTasks.map((task) => (
                <motion.tr
                  key={task.id}
                  whileHover={{ scale: 1.005 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                >
                  <td className="py-3 px-4">{task.taskName}</td>
                  <td className="py-3 px-4">{task.department}</td>
                  <td className="py-3 px-4">{task.assignedTo}</td>
                  <td className="py-3 px-4">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs ${priorityChip[task.priority]}`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded capitalize text-xs ${statusChip[task.status]}`}
                    >
                      {task.status}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
