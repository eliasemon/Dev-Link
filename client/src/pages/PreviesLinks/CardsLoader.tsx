import { FaLongArrowAltRight } from 'react-icons/fa';
import platformMap from '@/constant';
import { Link as LinkItem } from '@/store/LinkSlice';
import { User } from '@/store/authSlice';
/**
 * CardsLoader component renders user profile information and a list of links.
 *  props - Component props
 * props.user - User data to display
 * - List of links to display
 * returns JSX.Element
 */

const CardsLoader = ({
  user,
  links,
}: {
  user: Partial<User> | null;
  links: LinkItem[];
}) => {
  return (
    <div className="bg-white p-10 md:rounded-lg md:shadow-lg md:absolute md:top-1/4 md:left-1/2 md:transform md:-translate-x-1/2">
      <div className="m-8">
        <div className="flex justify-center">
          <img
            src={user?.profilePic}
            className="w-24 h-24 rounded-full mb-2"
            alt="Profile"
          />
        </div>
        <h1 className="text-xl w-full h-6 font-bold text-neutral-600 text-center mb-2">
          {`${user?.firstName?.slice(0, 10)} ${user?.lastName?.slice(0, 10)}`}
        </h1>
        <h1 className="text-neutral-500 text-center rounded-md mb-4">
          {user?.userEmail}
        </h1>
      </div>

      <div className="space-y-6">
        {links.map((link: LinkItem) => {
          const Icon = platformMap.get(link.platform)?.icon;
          const color = platformMap.get(link.platform)?.color;

          return (
            <a
              key={link.link}
              href={link.link}
              style={{ backgroundColor: color }}
              className="h-14 w-full md:min-w-80 hover:shadow-md hover:shadow-primary-500 rounded-md text-white flex justify-between items-center p-4"
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon />}
                <h1>{link.platform}</h1>
              </div>
              <FaLongArrowAltRight />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CardsLoader;
