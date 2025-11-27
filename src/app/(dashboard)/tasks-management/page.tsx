"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CheckSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  Plus,
} from "lucide-react";

export type UserRole =
  | "employee"
  | "admin"
  | "developer"
  | "management"
  | "pc"
  | "ea";

export interface User {
  id: string;
  name: string;
  role: UserRole;
  department: string;
  joiningDate: string;
  dob: string;
  bloodGroup: string;
  profilePhoto: string;
  misScore: number;
}

const mockUser: User = {
  id: "1",
  name: "Rajesh Kumar",
  role: "employee",
  department: "Sales",
  joiningDate: "2023-01-15",
  dob: "1990-05-20",
  bloodGroup: "O+",
  profilePhoto:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  misScore: 87,
};

interface TaskManagementProps {
  user?: User;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "high" | "medium" | "low";
  dueDate: string;
  assignedBy?: string;
  category: "checklist" | "delegated" | "process";
  processType?: string;
}

const getRoleBasedTasks = (department: string): Task[] => {
  const commonTasks: Task[] = [
    {
      id: "1",
      title: "Daily Work Report",
      description: "Submit daily work summary",
      status: "completed",
      priority: "high",
      dueDate: "2024-11-22",
      category: "checklist",
    },
    {
      id: "2",
      title: "Team Meeting Attendance",
      description: "Attend morning team standup",
      status: "completed",
      priority: "medium",
      dueDate: "2024-11-22",
      category: "checklist",
    },
  ];

  const deptTasks: Record<string, Task[]> = {
    Sales: [
      {
        id: "3",
        title: "Lead Follow-Up - Acme Corp",
        description: "Send proposal & schedule demo",
        status: "in-progress",
        priority: "high",
        dueDate: "2024-11-23",
        assignedBy: "Sales Manager",
        category: "delegated",
      },
      {
        id: "4",
        title: "Process Customer Order #1234",
        description: "Verify stock and process payment",
        status: "pending",
        priority: "high",
        dueDate: "2024-11-22",
        category: "process",
        processType: "Sales Order",
      },
      {
        id: "5",
        title: "CRM Notes Update",
        description: "Add TechStart call notes",
        status: "pending",
        priority: "medium",
        dueDate: "2024-11-22",
        category: "process",
        processType: "CRM Management",
      },
      {
        id: "6",
        title: "Prepare Monthly Sales Report",
        description: "Compile sales data + PPT",
        status: "pending",
        priority: "medium",
        dueDate: "2024-11-25",
        assignedBy: "HOD - Sales",
        category: "delegated",
      },
    ],
  };

  return [...commonTasks, ...(deptTasks[department] || [])];
};

// ----------------------------------------------------------------------
// MAIN UI
// ----------------------------------------------------------------------

export default function TaskManagement({
  user = mockUser,
}: TaskManagementProps) {
  const [tasks] = useState<Task[]>(getRoleBasedTasks(user.department));
  const [filter, setFilter] = useState<
    "all" | "pending" | "in-progress" | "completed"
  >("all");
  const [categoryFilter, setCategoryFilter] = useState<
    "all" | "checklist" | "delegated" | "process"
  >("all");

  const filtered = tasks.filter(
    (t) =>
      (filter === "all" || t.status === filter) &&
      (categoryFilter === "all" || t.category === categoryFilter),
  );

  // Stats
  const pendingCount = tasks.filter((t) => t.status === "pending").length;
  const inProgressCount = tasks.filter(
    (t) => t.status === "in-progress",
  ).length;
  const completedCount = tasks.filter((t) => t.status === "completed").length;

  const icons = {
    completed: <CheckCircle className="h-5 w-5 text-green-600" />,
    "in-progress": <Clock className="h-5 w-5 text-orange-600" />,
    pending: <AlertCircle className="h-5 w-5 text-red-500" />,
  };

  const priorityClass = {
    high: "bg-red-100 text-red-700",
    medium: "bg-orange-100 text-orange-700",
    low: "bg-green-100 text-green-700",
  };

  return (
    <div className="space-y-3">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-semibold text-gray-900">
            Tasks Overview
          </h1>
          <p className="mt-1 text-gray-600">Department: {user.department}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700"
        >
          <Plus size={20} /> New Task
        </motion.button>
      </motion.div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Stat
          title="Total Tasks"
          value={tasks.length}
          icon={<CheckSquare />}
          color="blue"
        />
        <Stat
          title="Pending"
          value={pendingCount}
          icon={<AlertCircle />}
          color="red"
        />
        <Stat
          title="In Progress"
          value={inProgressCount}
          icon={<Clock />}
          color="orange"
        />
        <Stat
          title="Completed"
          value={completedCount}
          icon={<CheckCircle />}
          color="green"
        />
      </div>

      {/* FILTERS */}
      <GlassCard>
        <div className="mb-4 flex items-center gap-2">
          <Filter size={18} />
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FilterGroup
            title="Status"
            options={["all", "pending", "in-progress", "completed"]}
            active={filter}
            onChange={setFilter}
          />
          <FilterGroup
            title="Category"
            options={["all", "checklist", "delegated", "process"]}
            active={categoryFilter}
            onChange={setCategoryFilter}
          />
        </div>
      </GlassCard>

      {/* TASK LIST */}
      <div className="space-y-6">
        {filtered.map((task) => (
          <motion.div
            key={task.id}
            whileHover={{ scale: 1.012, y: -2 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl"
          >
            <div className="flex justify-between">
              <div className="flex flex-1 gap-4">
                <div className="mt-1">{icons[task.status]}</div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {task.title}
                    </h3>

                    <span
                      className={`rounded-lg px-2 py-1 text-xs ${priorityClass[task.priority]}`}
                    >
                      {task.priority}
                    </span>

                    <span className="rounded-lg bg-blue-100 px-2 py-1 text-xs text-blue-700">
                      {task.category}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">{task.description}</p>

                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Due: {task.dueDate}</span>
                    {task.assignedBy && (
                      <span>Assigned: {task.assignedBy}</span>
                    )}
                    {task.processType && (
                      <span>Process: {task.processType}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {task.status !== "completed" && (
                  <>
                    {task.status === "pending" && (
                      <button className="rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                        Start
                      </button>
                    )}
                    <button className="rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                      {task.status === "in-progress" ? "Complete" : "Mark Done"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------

const Stat = ({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.04 }}
    className="rounded-2xl border border-gray-200 bg-white p-6 shadow"
  >
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-3xl font-semibold">{value}</p>
      </div>
      <div
        className={`h-12 w-12 rounded-xl bg-${color}-100 flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
  </motion.div>
);

function FilterGroup({
  title,
  options,
  active,
  onChange,
}: {
  title: string;
  options: string[];
  active: string;
  onChange: (v: any) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm text-gray-600">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-lg px-3 py-1 text-sm capitalize transition-all ${
              active === o
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {o.replace("-", " ")}
          </button>
        ))}
      </div>
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border border-gray-200 bg-white/70 p-6 shadow backdrop-blur-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
