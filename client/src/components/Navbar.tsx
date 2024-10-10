import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from './ui/button'; // Importing Button for the Preview button

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Brand Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Brand Logo" className="w-10 h-10" />
          <span className="ml-2 text-lg font-bold text-[#2e9ccc]">
            DevLinks
          </span>
        </div>

        {/* Middle Section - Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <Button variant="ghost" className="text-lg">
                Links
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" className="text-lg">
                ProfileDetails
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Preview Button */}
        <div>
          <Button variant="default" className="text-lg">
            Preview
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
