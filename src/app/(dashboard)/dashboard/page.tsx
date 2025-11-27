"use client";

import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function EmployeeDashboard() {
  return (
    <div className="space-y-8 p-6">
      {/* ============ TOP ROW ============ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-4"
      >
        {/* MIS Score */}
        <HoverCard className="bg-linear-to-br from-blue-600 to-blue-500 text-white shadow-lg lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight text-white">
              MIS Score
            </CardTitle>
            <CardDescription className="text-blue-100">
              Based on tasks, timelines & KPIs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-7xl font-extrabold text-white"
            >
              87<span className="text-2xl">/100</span>
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Progress
                value={87}
                progressColor="bg-white"
                className="mt-4 h-3 bg-gray-400"
              />
            </motion.div>
          </CardContent>
        </HoverCard>

        {/* Profile */}
        <HoverCard>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Rajesh Kumar
            </CardTitle>
            <CardDescription>Sales Department</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>Joined: 1/15/2023</p>
            <p>DOB: 5/20/1990</p>
            <p>Blood Group: O+</p>
          </CardContent>
        </HoverCard>

        {/* This Month */}
        <HoverCard>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">This Month</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Stat
              label="Tasks Completed"
              value="24/30"
              color="text-green-600"
            />
            <Stat label="Pending Tasks" value="6" color="text-orange-500" />
            <Stat label="Awards" value="3" color="text-purple-600" />
          </CardContent>
        </HoverCard>
      </motion.div>

      {/* ============ MID SECTION ============ */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SlideUp delay={0.15}>
          <HoverCard>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Attendance Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex justify-between">
                <MiniStat label="Present" value="6" color="text-green-600" />
                <MiniStat label="Late" value="1" color="text-yellow-500" />
                <MiniStat label="Leave" value="1" color="text-blue-600" />
              </div>

              <div>
                <p className="text-muted-foreground mb-1 text-xs">
                  Recent Attendance
                </p>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 7, 8, 9].map((day) => (
                    <motion.div
                      key={day}
                      whileHover={{ scale: 1.1 }}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-green-100 text-sm text-green-700"
                    >
                      {day}
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </HoverCard>
        </SlideUp>

        <SlideUp delay={0.25}>
          <HoverCard>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Leave Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <LeaveItem title="Annual Leave (AL)" used={12} total={15} />
              <LeaveItem title="Privilege Leave (PL)" used={5} total={7} />
              <LeaveItem title="Casual Leave (CL)" used={8} total={10} />
            </CardContent>
          </HoverCard>
        </SlideUp>
      </div>

      {/* ============ KPI SECTION ============ */}
      <SlideUp delay={0.35}>
        <HoverCard>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              KRA & KPI Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <KpiItem
                title="Sales Target Achievement"
                target="100%"
                achieved="87%"
                value={87}

              />
              <KpiItem
                title="Client Acquisition"
                target="10 clients"
                achieved="8 clients"
                value={80}
              />
              <KpiItem
                title="Response Time"
                target="24 hours"
                achieved="18 hours"
                value={75}

              />
              <KpiItem
                title="Customer Satisfaction"
                target="90%"
                achieved="92%"
                value={102}
                color="bg-green-600"
              />
            </div>
          </CardContent>
        </HoverCard>
      </SlideUp>
    </div>
  );
}

/* =============== REUSABLE COMPONENTS ================= */

type StatProps = { label: string; value: string; color?: string };
function Stat({ label, value, color }: StatProps) {
  return (
    <p className="flex justify-between text-sm">
      <span>{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </p>
  );
}

function MiniStat({ label, value, color }: StatProps) {
  return (
    <div className="text-center">
      <p className={`font-bold ${color}`}>{value}</p>
      <p className="text-muted-foreground text-xs">{label}</p>
    </div>
  );
}

type LeaveProps = { title: string; used: number; total: number };
function LeaveItem({ title, used, total }: LeaveProps) {
  const percent = (used / total) * 100;
  return (
    <div>
      <p className="text-sm font-medium">
        {title} — {used}/{total}
      </p>
      <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }}>
        <Progress value={percent} className="mt-2" />
      </motion.div>
    </div>
  );
}

type KpiProps = {
  title: string;
  target: string;
  achieved: string;
  value: number;
  color?: string;
  progressColor?: string;
};
function KpiItem({
  title,
  target,
  achieved,
  value,
  color,
  progressColor,
}: KpiProps) {
  return (
    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-muted-foreground text-xs">Target: {target}</p>
      <Progress
        value={value}
        progressColor={progressColor}
        className={`h-3 ${color}`}
      />
      <p className="text-muted-foreground text-xs">Achieved: {achieved}</p>
    </motion.div>
  );
}

/* =============== MICRO INTERACTION WRAPPERS ================= */

type HoverCardProps = React.HTMLAttributes<HTMLDivElement>;
function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -2 }}
      transition={{ duration: 0.18 }}
      className={`rounded-xl border border-neutral-200/40 bg-white/60 p-0 shadow-sm backdrop-blur dark:bg-neutral-900/60 ${className}`}
    >
      <Card className="border-none bg-transparent shadow-none">{children}</Card>
    </motion.div>
  );
}

function SlideUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
