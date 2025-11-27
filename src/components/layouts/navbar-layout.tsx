
import { Bell, ChevronDown } from "lucide-react";
const NavbarLayout = () => {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className=" flex items-center gap-2  pl-4">
          <button className="hover:bg-muted rounded-lg p-2">
            <Bell size={20} />
          </button>
          <div className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-lg p-2">
            <div className="text-sm">
              <p className="font-medium">Marvin McKinney</p>
              <p className="text-muted-foreground text-xs">Admin</p>
            </div>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;
