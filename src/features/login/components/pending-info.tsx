"use client";
import { AlertCircle } from "lucide-react";

export function PendingInfo() {
  return (
    <div
      className="bg-info-bg border-info-border flex items-start gap-3 rounded-lg border p-4"
      role="alert"
    >
      <AlertCircle className="text-info-text mt-0.5 h-5 w-5 flex-shrink-0" />
      <div className="flex-1 space-y-1">
        <p className="text-info-text text-sm font-medium">
          Account Pending Verification
        </p>
        <p className="text-info-text/80 text-sm">
          Your account is pending verification. Please wait for Botivate
          approval or contact{" "}
          <a
            href="mailto:support@botivate.com"
            className="hover:text-info-text underline"
          >
            support@botivate.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
