import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { BellDot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { navBarConstants } from "@/lib/helpers/navBarConstants";

function TopBar() {
  const location = useLocation();
  const pathname = location.pathname;
  const currentNavItem = navBarConstants.find((item) =>
    pathname.includes(item.path)
  );
  const title = currentNavItem ? currentNavItem.title : null;

  return (
    <div className="my-4 mr-4 p-5 flex items-center rounded-xl  bg-white">
      <div className="flex items-center mr-60">
        <span className="ml-2 text-lg font-semibold">{title}</span>
      </div>
      <Link className="ml-96 mr-5" to="/">
        <BellDot strokeWidth={1.5} className="text-yellow-600" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center hover:cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
          My Account
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Update Password</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TopBar;
