// TaskCore.tsx (Shared Logic) — DO NOT STYLE HERE
"use client";

import React from "react";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

export interface Task {
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

export interface User {
  id: string;
  name: string;
  department: string;
}

export const mockUser: User = {
  id: "1",
  name: "Rajesh Kumar",
  department: "Sales",
};

export const getRoleBasedTasks = (): Task[] => [
  {
    id: "1",
    title: "Daily Work Report",
    description: "Submit your daily report",
    status: "completed",
    priority: "high",
    dueDate: "2024-11-22",
    category: "checklist",
  },
  {
    id: "2",
    title: "Follow-up with Lead",
    description: "Contact Acme Corp",
    status: "in-progress",
    priority: "medium",
    dueDate: "2024-11-23",
    assignedBy: "Sales Manager",
    category: "delegated",
  },
  {
    id: "3",
    title: "Process Order #1133",
    description: "Check stock and process order",
    status: "pending",
    priority: "high",
    dueDate: "2024-11-24",
    category: "process",
  },
];

export default function statusIcon() {
  return {
    completed: <CheckCircle className="h-5 w-5 text-green-600" />,
    "in-progress": <Clock className="h-5 w-5 text-orange-500" />,
    pending: <AlertCircle className="h-5 w-5 text-red-500" />,
  };
}
