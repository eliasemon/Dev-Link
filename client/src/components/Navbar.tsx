import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { FaLink } from 'react-icons/fa6';
import { CiLink } from 'react-icons/ci';
import { Link, useLocation } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { Button } from './ui/button';
import { useStore } from '@/store/store';
import { FaEye } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';

const NavBar = () => {
  const { clearUser, clearLinks, setlinkDraft, setProfileDraft } = useStore(
    (action) => action,
  );
  const location = useLocation();
  const isProfileMatching = location.pathname === '/profile';
  const isLinkMatching =
    location.pathname === '/links' || location.pathname === '/';
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 w-full z-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Brand Logo */}
        <Link to={'/links'}>
          <div className="flex items-center">
            <CiLink className="text-3xl bg-primary-500 text-white rounded-md px-1" />
            <span className="hidden md:block ml-2 text-lg font-bold text-black">
              DevLinks
            </span>
          </div>
        </Link>

        {/* Middle Section - Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <Link
                to={'/links'}
                className={`text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg hover:text-primary-900 ${isLinkMatching ? 'bg-primary-100 text-primary-700' : ''} hover:bg-primary-100`}
              >
                <FaLink />
                <span className="hidden md:block">Links</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to={'/profile'}
                className={`text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg hover:text-primary-900  ${isProfileMatching ? 'bg-primary-100 text-primary-700' : ''} hover:bg-primary-100`}
              >
                <CgProfile />
                <span className="hidden md:block"> ProfileDetails </span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Preview Button */}
        <div className="flex flex-row items-center gap-2">
          <Button
            className="hover:bg-red-200 text-red-800"
            onClick={() => {
              clearUser();
              clearLinks();
              setlinkDraft(false);
              setProfileDraft(false);
            }}
          >
            <GoSignOut className="md:hidden" />
            <span className="hidden md:block">SignOut</span>
          </Button>
          <Link
            to={'/preview'}
            className="text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg border text-primary-500  hover:text-white border-primary-500 hover:bg-primary-900"
          >
            <FaEye className="md:hidden" />
            <span className="hidden md:block">Preview</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
