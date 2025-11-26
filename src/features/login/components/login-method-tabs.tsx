import { LoginMethod } from "../schemas/login-schemas";

interface LoginMethodTabsProps {
  value: LoginMethod;
  onChange: (method: LoginMethod) => void;
}

const methods: { value: LoginMethod; label: string }[] = [
  { value: "mobile", label: "Mobile" },
  { value: "employeeId", label: "Employee ID" },
];

export function LoginMethodTabs({ value, onChange }: LoginMethodTabsProps) {
  return (
    <div className="bg-muted mb-6 flex items-center justify-center gap-1 rounded-lg p-1">
      {methods.map((method) => (
        <button
          key={method.value}
          type="button"
          onClick={() => onChange(method.value)}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
            value === method.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          } `}
        >
          {method.label}
        </button>
      ))}
    </div>
  );
}
