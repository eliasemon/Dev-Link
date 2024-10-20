import React from 'react';
import ProfileCard from './ProfileCard';
import AuthComponent from '@/pages/Auth/Auth';
import { useStore } from '@/store/store';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = useStore((state) => state.user);

  return (
    <div className="w-full h-full flex gap-10">
      {!user?.token && (
        <div className="fixed top-0 left-0 h-full w-full z-50">
          <AuthComponent />
        </div>
      )}
      {user?.token && (
        <div className="w-full h-full flex gap-10">
          {/* Sticky ProfileCard */}
          <div className="hidden lg:block lg:w-1/2 xl:w-2/5 bg-white p-20 rounded-lg sticky top-0 h-screen overflow-y-auto">
            <ProfileCard />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-1/2 xl:w-3/5 bg-white p-2 2xl:p-10 rounded-lg overflow-y-scroll">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
