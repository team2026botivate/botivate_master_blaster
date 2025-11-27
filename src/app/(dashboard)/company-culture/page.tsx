"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Award,
  Briefcase,
  Megaphone,
  Calendar,
  Trophy,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";

/* =======================================================
   TYPE DEFINITIONS
   ======================================================= */

interface Achievement {
  id: string;
  type: "employee-month" | "milestone" | "celebration";
  title: string;
  description: string;
  date: string;
  image?: string;
}

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  postedDate: string;
}

/* =======================================================
   DUMMY DATA (Standalone)
   ======================================================= */

const achievements: Achievement[] = [
  {
    id: "1",
    type: "employee-month",
    title: "Employee of the Month - November 2024",
    description:
      "Rajesh Kumar exceeded targets by 150% and strengthened customer relationships.",
    date: "2024-11-01",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    id: "2",
    type: "milestone",
    title: "New Client: Acme Corporation",
    description:
      "We proudly onboard Acme Corporation — a major milestone for our growth.",
    date: "2024-11-15",
    image: "https://images.unsplash.com/photo-1581091870632-6a96e86bf9b9?w=800",
  },
  {
    id: "3",
    type: "celebration",
    title: "Diwali Celebration 2024",
    description:
      "A vibrant company celebration filled with joy, lights, and great memories!",
    date: "2024-11-12",
    image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=400",
  },
];

const jobOpenings: JobOpening[] = [
  {
    id: "1",
    title: "Senior Software Developer",
    department: "Technology",
    location: "Mumbai",
    type: "full-time",
    postedDate: "2024-11-18",
  },
  {
    id: "2",
    title: "Sales Executive",
    department: "Sales",
    location: "Bangalore",
    type: "full-time",
    postedDate: "2024-11-15",
  },
  {
    id: "3",
    title: "HR Manager",
    department: "Human Resources",
    location: "Delhi",
    type: "full-time",
    postedDate: "2024-11-10",
  },
];

const companyNews = [
  {
    id: "1",
    title: "Q3 Results - Record Revenue!",
    description: "We achieved 125% of our quarterly target.",
    date: "2024-11-20",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "2",
    title: "New Production Line Launch",
    description:
      "New automated line operational. Production capacity up by 40%.",
    date: "2024-11-18",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "3",
    title: "Team Building Event - Dec 15",
    description: "Annual outing at Adventure Park. Save the date!",
    date: "2024-11-16",
    icon: Calendar,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "4",
    title: "ISO 9001:2015 Certification",
    description: "We are officially ISO certified! A big win for the company.",
    date: "2024-11-10",
    icon: Trophy,
    color: "bg-orange-100 text-orange-600",
  },
];

/* =======================================================
   GENERIC REUSABLE CARDS
   ======================================================= */

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
    className={`rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all ${className}`}
  >
    {children}
  </motion.div>
);

const GradientCard = ({
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
    className={`rounded-2xl bg-blue-500 p-8 text-white shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

/* =======================================================
   MAIN COMPONENT
   ======================================================= */

export default function CompanyCulture() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-semibold text-gray-900">
          Company Culture
        </h1>
        <p className="mt-1 text-gray-600">
          Celebrating our people, achievements, and milestones
        </p>
      </motion.div>

      {/* EMPLOYEE OF THE MONTH */}
      <GradientCard className="from-blue-600 to-blue-700">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-6">
            {/* Image */}
            <div className="h-20 w-20 rounded-full bg-white p-1 shadow-md">
              <img
                src={achievements[0].image}
                alt="Employee of the Month"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-3">
                <Trophy className="h-8 w-8 text-white" />
                <h3 className="text-xl text-white">Employee of the Month</h3>
              </div>

              <h2 className="text-3xl font-semibold text-white">
                Rajesh Kumar
              </h2>

              <p className="mt-2 max-w-xl text-blue-100">
                Exceeded targets by 150%, strengthening customer relationships
                with outstanding professionalism.
              </p>

              <div className="mt-3 flex gap-4 text-sm text-blue-100">
                <span>Sales Department</span>•<span>Nov 2024</span>
              </div>
            </div>
          </div>

          <Award className="h-20 w-20 text-white opacity-20" />
        </div>
      </GradientCard>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* LEFT 2 COLUMNS */}
        <div className="space-y-10 lg:col-span-2">
          {/* NEWS SECTION */}
          <GlassCard>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
                <Megaphone className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Company News & Announcements
              </h3>
            </div>

            <div className="space-y-5">
              {companyNews.map((n) => {
                const Icon = n.icon;
                return (
                  <motion.div
                    key={n.id}
                    whileHover={{ scale: 1.01 }}
                    className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${n.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{n.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {n.description}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {new Date(n.date).toLocaleDateString()}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>

          {/* ACHIEVEMENTS */}
          <GlassCard>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Recent Achievements & Celebrations
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {achievements.slice(1).map((a) => (
                <motion.div
                  key={a.id}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl border border-gray-200 shadow-sm transition-all hover:border-blue-400"
                >
                  {a.image && (
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-40 w-full object-cover"
                    />
                  )}

                  <div className="space-y-2 p-4">
                    <span
                      className={`rounded-lg px-2 py-1 text-xs ${
                        a.type === "milestone"
                          ? "bg-blue-100 text-blue-700"
                          : a.type === "celebration"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                      }`}
                    >
                      {a.type === "milestone"
                        ? "Milestone"
                        : a.type === "celebration"
                          ? "Celebration"
                          : "Recognition"}
                    </span>

                    <h4 className="text-lg font-medium text-gray-900">
                      {a.title}
                    </h4>
                    <p className="text-sm text-gray-600">{a.description}</p>

                    <p className="text-xs text-gray-500">
                      {new Date(a.date).toLocaleDateString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-10">
          {/* JOB OPENINGS */}
          <GlassCard>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                We’re Hiring!
              </h3>
            </div>

            <div className="space-y-5">
              {jobOpenings.map((job) => (
                <motion.div
                  key={job.id}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-gray-200 p-4 transition-all hover:border-blue-500"
                >
                  <h4 className="mb-2 font-medium text-gray-900">
                    {job.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    <b>Department:</b> {job.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    <b>Location:</b> {job.location}
                  </p>
                  <p className="mb-3 text-sm text-gray-600">
                    <b>Type:</b> {job.type}
                  </p>

                  <button className="w-full rounded-xl bg-blue-600 py-2 text-sm text-white transition-all hover:bg-blue-700">
                    Apply Now
                  </button>
                </motion.div>
              ))}

              <button className="w-full rounded-xl bg-gray-100 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200">
                View All Openings
              </button>
            </div>
          </GlassCard>

          {/* UPCOMING EVENTS */}
          <GlassCard>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-medium text-gray-900">Team Building Event</p>
                <p className="text-xs text-gray-600">Dec 15, 2024</p>
                <p className="text-xs text-gray-500">
                  Adventure Park, Lonavala
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <p className="font-medium text-gray-900">Annual Day</p>
                <p className="text-xs text-gray-600">Dec 28, 2024</p>
                <p className="text-xs text-gray-500">Company Auditorium</p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <p className="font-medium text-gray-900">
                  New Year Celebration
                </p>
                <p className="text-xs text-gray-600">Dec 31, 2024</p>
                <p className="text-xs text-gray-500">Grand Banquet Hall</p>
              </div>
            </div>
          </GlassCard>

          {/* TEAM STATS */}
          <GradientCard className="from-purple-600 to-purple-700">
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-white" />
              <h3 className="text-xl">Team Overview</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-purple-100">
                <span>Total Employees</span>
                <span className="text-2xl font-semibold text-white">156</span>
              </div>
              <div className="flex justify-between text-purple-100">
                <span>Departments</span>
                <span className="text-2xl font-semibold text-white">8</span>
              </div>
              <div className="flex justify-between text-purple-100">
                <span>Open Positions</span>
                <span className="text-2xl font-semibold text-white">
                  {jobOpenings.length}
                </span>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>
    </div>
  );
}
