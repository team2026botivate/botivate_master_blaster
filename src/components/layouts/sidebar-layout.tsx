import { motion } from "motion/react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  CheckSquare,
  Code,
  GitBranch,
  GraduationCap,
  Heart,
  LayoutDashboard,
  UserCog,
  Users,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import {
  IconLayoutDashboard,
  IconLayoutSidebarRightCollapse,
} from "@tabler/icons-react";

export function SidebarLayout() {
  const [open, setOpen] = React.useState(true);

  const links = [
    { label: "Dashboard", href: "/dashboard", icon: <IconLayoutDashboard /> },
    {
      label: "Tasks Management",
      href: "/tasks-management",
      icon: <CheckSquare />,
    },
    { label: "Training", href: "/training", icon: <GraduationCap /> },
    { label: "Company Culture", href: "/company-culture", icon: <Heart /> },
    { label: "Admin Panel", href: "/admin-panel", icon: <Users /> },
    { label: "System Builder", href: "/system-builder", icon: <Code /> },
    { label: "Management", href: "/management", icon: <BarChart3 /> },
    {
      label: "Process Monitor",
      href: "/process-coordinator",
      icon: <GitBranch />,
    },
    { label: "EA Dashboard", href: "/ea-dashboard", icon: <UserCog /> },
  ];

  return (
    <div className="relative">
      <SidebarProvider open={open} setOpen={setOpen}>
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="relative h-full justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              <>
                <Logo />
              </>

              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>

            <div>
              <SidebarLink
                link={{
                  label: "Botivate OS",
                  href: "#",
                  icon: (
                    <img
                      src="https://avatars.githubusercontent.com/u/143429276?v=4"
                      className="h-7 w-7 shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black text-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black"
      >
        Botivate OS
      </motion.span>
    </Link>
  );
};
