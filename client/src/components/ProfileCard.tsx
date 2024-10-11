import platformMap from '@/constant';
import { useStore } from '@/store/store';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ProfileCard = () => {
  const user = useStore((state) => state.user);
  const links = useStore((state) => state.links);
  const location = useLocation();
  const isProfileMatching = location.pathname === '/profile';
  const fillArray = new Array(5 - links.slice(0, 5).length).fill({
    platform: '',
    link: '',
  });
  const shallowLinks = [...links.slice(0, 5), ...fillArray];
  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-stone-900 rounded-[40px] p-3">
      <div className="w-full max-w-sm mx-auto bg-white border border-stone-900 rounded-[40px] p-8">
        <div className="flex justify-center">
          <div className="w-52 h-7  bg-white  border-b border-l border-r border-stone-900 rounded-t-[-44px] rounded-b-[34px] mt-[-33px]"></div>
        </div>
        {/* Profile Image Placeholder */}
        {isProfileMatching && (
          <div className="m-8 ">
            <div className="flex justify-center">
              <img
                src={user?.profilePic}
                className="w-24 h-24  rounded-full mb-2"
              ></img>
            </div>
            {/* Name Placeholder */}
            <h1 className="text-2xl h-6 font-bold text-neutral-600 text-center mb-2">
              {`${user?.firstName} ${user?.lastName}`}
            </h1>
            {/* Description Placeholder */}
            <h1 className="text-neutral-500 text-center  rounded-md mb-4">
              {user?.userEmail}
            </h1>
          </div>
        )}

        {!isProfileMatching && (
          <div className="m-8">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
            </div>
            {/* Name Placeholder */}
            <div className="h-6 bg-gray-200 rounded-md mb-2"></div>
            {/* Description Placeholder */}
            <div className="h-4 bg-gray-200 rounded-md mb-4"></div>
          </div>
        )}

        {/* Button Placeholders */}
        <div className="space-y-6">
          {shallowLinks.map((link) => {
            if ('platform' in link && link.platform !== '') {
              const Icon =
                link?.platform && platformMap.get(link.platform)?.icon;
              const color =
                link?.platform && platformMap.get(link.platform)?.color;
              return (
                <div
                  style={{ backgroundColor: color }}
                  className={`h-14 rounded-md text-white flex justify-between items-center p-4`}
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon />}
                    <h1>{link.platform}</h1>
                  </div>
                  <FaLongArrowAltRight />
                </div>
              );
            }
            return <div className="h-14 bg-gray-200 rounded-md"></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
