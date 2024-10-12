import platformMap from '@/constant'; // Import the platform map containing platform icons and colors
import { useStore } from '@/store/store'; // Zustand store for state management
import { FaLongArrowAltRight } from 'react-icons/fa'; // Import right arrow icon from react-icons
import { useLocation } from 'react-router-dom'; // Import for accessing the current route location

/**
 * ProfileCard Component
 * Renders a user profile card displaying profile picture, name, email, and associated platform links.
 * It also handles the scenario where a placeholder is shown if data is not available (like in skeleton state).
 * The component conditionally renders user data if the user is on the profile page.
 */
const ProfileCard = () => {
  // Accessing user and links data from Zustand store
  const user = useStore((state) => state.user);
  const links = useStore((state) => state.links);

  // Accessing current route to check if the profile page is being displayed
  const location = useLocation();
  const isProfileMatching = location.pathname === '/profile'; // Checks if the current page is the profile page

  // Fill array to ensure that the card always displays 5 rows (either with data or placeholders)
  const fillArray = new Array(5 - links.slice(0, 5).length).fill({
    platform: '',
    link: '',
  });
  const shallowLinks = [...links.slice(0, 5), ...fillArray]; // Combine valid links and empty placeholders

  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-stone-900 rounded-[40px] p-3">
      <div className="w-full max-w-sm mx-auto bg-white border border-stone-900 rounded-[40px] p-8">
        {/* Decorative top border for the card */}
        <div className="flex justify-center">
          <div className="w-52 h-7 bg-white border-b border-l border-r border-stone-900 rounded-t-[-44px] rounded-b-[34px] mt-[-33px]"></div>
        </div>

        {/* Conditional rendering of profile data if the user is on the profile page */}
        {isProfileMatching ? (
          <div className="m-8">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <img
                src={user?.profilePic}
                alt="User Profile"
                className="w-24 h-24 rounded-full mb-2"
              />
            </div>
            {/* Display user name and email */}
            <h1 className="text-xs sm:text-lg w-full h-6 font-bold text-neutral-600 text-center mb-2">
              {`${user?.firstName?.slice(0, 10)} ${user?.lastName?.slice(0, 10)}`}
            </h1>
            <h1 className="text-neutral-500 text-center rounded-md mb-4">
              {user?.userEmail}
            </h1>
          </div>
        ) : (
          <div className="m-8">
            {/* Placeholder content when profile is not visible */}
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-md mb-4"></div>
          </div>
        )}

        {/* Display platform links or placeholders */}
        <div className="space-y-6">
          {shallowLinks.map((link, index) => {
            if ('platform' in link && link.platform !== '') {
              const Icon =
                link?.platform && platformMap.get(link.platform)?.icon; // Get platform icon from platformMap
              const color =
                link?.platform && platformMap.get(link.platform)?.color; // Get platform color from platformMap
              return (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`h-14 rounded-md text-white flex justify-between items-center p-4`}
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon />} {/* Render platform icon */}
                    <h1>{link.platform}</h1> {/* Render platform name */}
                  </div>
                  <FaLongArrowAltRight /> {/* Render arrow icon */}
                </div>
              );
            }
            // Placeholder for empty platform links
            return (
              <div key={index} className="h-14 bg-gray-200 rounded-md"></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
