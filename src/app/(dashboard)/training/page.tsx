"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Play,
  CheckCircle,
  Clock,
  Book,
  Video,
  FileText,
  Award,
} from "lucide-react";

/* =======================================================
   FULLY SELF-CONTAINED TYPE DEFINITIONS
   ======================================================= */

export type UserRole =
  | "employee"
  | "admin"
  | "developer"
  | "management"
  | "pc"
  | "ea";

interface TrainingCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "video" | "document" | "interactive";
  status: "not-started" | "in-progress" | "completed";
  progress?: number;
}

/* =======================================================
   UI COMPONENTS (SELF-CONTAINED)
   ======================================================= */

const SectionCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.01 }}
    className={`rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all ${className}`}
  >
    {children}
  </motion.div>
);

const StatCard = ({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="rounded-2xl border border-gray-200 bg-white p-6 shadow"
  >
    <div className="mb-4 flex items-center justify-between">
      <div
        className={`h-12 w-12 rounded-xl bg-${color}-100 flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>

    <p className="text-3xl font-semibold">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </motion.div>
);

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="h-full rounded-full bg-blue-600"
    />
  </div>
);

const CourseCard = ({
  course,
  onClick,
}: {
  course: TrainingCourse;
  onClick: () => void;
}) => {
  const typeIcon = {
    video: <Video className="h-5 w-5 text-blue-700" />,
    document: <FileText className="h-5 w-5 text-purple-700" />,
    interactive: <Book className="h-5 w-5 text-orange-700" />,
  };

  const statusBadge = {
    completed: (
      <span className="flex items-center gap-1 rounded-lg bg-green-100 px-2 py-1 text-xs text-green-700">
        <CheckCircle className="h-3 w-3" />
        Completed
      </span>
    ),
    "in-progress": (
      <span className="flex items-center gap-1 rounded-lg bg-orange-100 px-2 py-1 text-xs text-orange-700">
        <Clock className="h-3 w-3" />
        In Progress
      </span>
    ),
    "not-started": (
      <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-700">
        Not Started
      </span>
    ),
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-xl"
      onClick={onClick}
    >
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
          {typeIcon[course.type]}
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900">{course.title}</h3>
                {statusBadge[course.status]}
              </div>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.06 }}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white shadow"
            >
              <Play size={16} />
              {course.status === "not-started"
                ? "Start"
                : course.status === "completed"
                  ? "Review"
                  : "Continue"}
            </motion.button>
          </div>

          <div className="flex gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {course.duration}
            </span>
            <span className="capitalize">{course.type}</span>
          </div>

          {/* Progress */}
          {course.progress && course.progress > 0 && course.progress < 100 && (
            <div className="mt-2">
              <div className="mb-1 flex justify-between text-xs text-gray-600">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  className="h-2 rounded-full bg-orange-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* =======================================================
   DUMMY TRAINING DATA (Self-contained)
   ======================================================= */

const trainingByRole: Record<UserRole, TrainingCourse[]> = {
  employee: [
    {
      id: "1",
      title: "Getting Started with Botivate OS",
      description: "Quick introduction to the platform",
      duration: "15 mins",
      type: "video",
      status: "completed",
      progress: 100,
    },
    {
      id: "2",
      title: "Using Task Management System",
      description: "Learn how to manage your tasks",
      duration: "20 mins",
      type: "video",
      status: "in-progress",
      progress: 55,
    },
    {
      id: "3",
      title: "Understanding KPI & KRA",
      description: "How your performance is evaluated",
      duration: "12 mins",
      type: "video",
      status: "not-started",
    },
    {
      id: "4",
      title: "Leave & Attendance System",
      description: "Learn to apply for leave",
      duration: "10 mins",
      type: "document",
      status: "not-started",
    },
  ],

  admin: [
    {
      id: "1",
      title: "Admin Dashboard Overview",
      description: "Everything inside admin panel",
      duration: "25 mins",
      type: "video",
      status: "completed",
      progress: 100,
    },
    {
      id: "2",
      title: "Team Task Monitoring",
      description: "Track department task updates",
      duration: "30 mins",
      type: "video",
      status: "in-progress",
      progress: 40,
    },
  ],

  developer: [
    {
      id: "1",
      title: "System Architecture Overview",
      description: "Understand Botivate OS structure",
      duration: "45 mins",
      type: "video",
      status: "completed",
      progress: 100,
    },
    {
      id: "2",
      title: "Building New Systems",
      description: "Learn how to build new modules",
      duration: "60 mins",
      type: "interactive",
      status: "in-progress",
      progress: 70,
    },
    {
      id: "3",
      title: "Dashboard Builder",
      description: "Design custom dashboards",
      duration: "35 mins",
      type: "interactive",
      status: "not-started",
    },
  ],

  management: [
    {
      id: "1",
      title: "Management Dashboard",
      description: "Understand top-level insights",
      duration: "20 mins",
      type: "video",
      status: "completed",
      progress: 100,
    },
  ],

  pc: [
    {
      id: "1",
      title: "Process Coordinator Guide",
      description: "Your responsibilities explained",
      duration: "20 mins",
      type: "video",
      status: "completed",
      progress: 100,
    },
  ],

  ea: [
    {
      id: "1",
      title: "Executive Assistant Workflow",
      description: "System-driven EA workflows",
      duration: "25 mins",
      type: "video",
      status: "in-progress",
      progress: 55,
    },
  ],
};

/* =======================================================
   FINAL TRAINING MODULE (STANDALONE)
   ======================================================= */

export default function TrainingModule() {
  const role: UserRole = "employee";
  const courses = trainingByRole[role];
  const [selectedCourse, setSelectedCourse] = useState<TrainingCourse | null>(
    null,
  );

  const completedCount = courses?.filter(
    (c) => c.status === "completed",
  ).length;
  const inProgressCount = courses?.filter(
    (c) => c.status === "in-progress",
  ).length;

  const totalProgress = Math.round(
    courses?.reduce((acc, c) => acc + (c.progress || 0), 0) / courses?.length,
  );

  const roleTitle: Record<UserRole, string> = {
    employee: "Employee",
    admin: "Admin / HOD",
    developer: "Developer",
    management: "Management",
    pc: "Process Coordinator",
    ea: "Executive Assistant",
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-semibold text-gray-900">
          Training Module
        </h1>
        <p className="mt-1 text-gray-600">
          Role-specific training for <b>{roleTitle[role]}</b>
        </p>
      </motion.div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Book />}
          value={courses?.length}
          label="Total Courses"
          color="blue"
        />
        <StatCard
          icon={<CheckCircle />}
          value={completedCount}
          label="Completed"
          color="green"
        />
        <StatCard
          icon={<Clock />}
          value={inProgressCount}
          label="In Progress"
          color="orange"
        />
        <StatCard
          icon={<Award />}
          value={`${totalProgress}%`}
          label="Overall Progress"
          color="purple"
        />
      </div>

      {/* PROGRESS OVERVIEW */}
      <SectionCard>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Training Progress
          </h3>
          <span className="text-sm text-gray-600">
            {totalProgress}% Complete
          </span>
        </div>
        <ProgressBar progress={totalProgress} />
      </SectionCard>

      {/* COURSE LIST */}
      <SectionCard>
        <h3 className="mb-6 text-xl font-semibold text-gray-900">
          Available Courses
        </h3>

        <div className="space-y-5">
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      </SectionCard>

      {/* TRAINING TIPS */}
      <SectionCard className="border border-blue-200 bg-blue-50">
        <h3 className="mb-2 font-semibold text-blue-900">Training Tips</h3>
        <ul className="space-y-1 text-sm text-blue-800">
          <li>• Complete courses in recommended order</li>
          <li>• Revisit modules anytime when needed</li>
          <li>• Practice concepts inside Botivate OS</li>
          <li>• Ask supervisor for clarifications</li>
        </ul>
      </SectionCard>
    </div>
  );
}
