import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  isSubmitting?: boolean;
  label: string;
  type?: "button" | "submit" | "reset";
  whatAction?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  href?: string; // 👉 link ke liye new prop
};

export function Button_Custom({
  isSubmitting,
  label,
  type = "button",
  whatAction,
  disabled,
  onClick,
  className,
  href,
  icon,
}: ButtonProps) {
  const baseStyles = cn(
    "group/btn from-primary to-accent relative ml-auto flex justify-center items-center gap-2 rounded-md bg-linear-to-br px-6 py-2 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50",
    {
      "cursor-not-allowed opacity-50": isSubmitting,
    },
    className,
  );

  const content = (
    <React.Fragment>
      {isSubmitting ? whatAction : label}
      {icon}
      <BottomGradient />
    </React.Fragment>
  );

  // 👉 If href exists, render Link instead of button
  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  // 👉 Otherwise Normal Button
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isSubmitting || disabled}
      className={baseStyles}
    >
      {content}
    </button>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);
