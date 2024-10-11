import { useEffect, useState } from 'react';
import platformMap from '@/constant';
import { useStore } from '@/store/store';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { getApiUrl } from '@/utils';
import Spinner from './Spinner';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  userEmail: string;
}

interface LinkItem {
  link: string;
  platform: string;
}

interface LiveData {
  user: User;
  links: {
    links: LinkItem[];
  };
}

const PreviewLinks = () => {
  const { user, isProfileDraft, islinkDraft } = useStore((state) => state);
  const links = useStore((state) => state.links);
  const { userId } = useParams();

  const [liveData, setLiveData] = useState<LiveData | null>(null); // Defined LiveData type
  const [loading, setLoading] = useState(true);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      (async () => {
        try {
          const response = await fetch(
            getApiUrl(`previewlinks/${userId || user?._id}`),
          );
          const data = await response.json();
          setLiveData(data); // Set live data when fetched
        } catch (error) {
          console.error('Error fetching live data:', error);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      })();
    }
  }, [userId, user]);

  const copyText = () => {
    const textToCopy = `${import.meta.env.VITE_CLIENT_URL}/preview/${user?._id}`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopyStatus('Link copied to clipboard!');
        setTimeout(() => setCopyStatus(null), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        setCopyStatus('Failed to copy link.');
        setTimeout(() => setCopyStatus(null), 2000);
      });
  };

  return (
    <div className="w-full h-[100vh] flex justify-center z-50 absolute top-0 left-0">
      <div className="h-1/2 w-full bg-primary-900 rounded-b-3xl">
        <div className="container mx-auto flex justify-between items-center bg-white rounded-lg py-2 px-6 mt-4">
          <Link
            className="text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg border font-bold border-primary-900 text-primary-900 hover:bg-primary-100"
            to={'/links'}
          >
            Back to Editor
          </Link>
          <Button
            onClick={copyText}
            className="text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg border font-bold border-primary-900 text-white hover:bg-primary-700 bg-primary-900"
          >
            Share Link
          </Button>
        </div>
        <div className="container mx-auto flex justify-center items-center  rounded-lg py-2 px-6 mt-4">
          {!userId && !liveData && (isProfileDraft || islinkDraft) && (
            <div className="mb-4 p-3 bg-yellow-200 text-yellow-800 rounded-lg">
              This is a draft mode preview. Please save changes to make the
              links visible on live.
            </div>
          )}
        </div>
      </div>

      {copyStatus && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white text-primary-900 p-4 rounded-lg shadow-lg">
          {copyStatus}
        </div>
      )}

      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary-900 p-4 rounded-lg shadow-lg">
          <Spinner />
        </div>
      )}

      {!loading && liveData ? (
        <div className="bg-white p-10 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="m-8">
            <div className="flex justify-center">
              <img
                src={liveData.user.profilePic}
                className="w-24 h-24 rounded-full mb-2"
                alt="Profile"
              />
            </div>
            <h1 className="text-2xl h-6 font-bold text-neutral-600 text-center mb-2">
              {`${liveData.user.firstName} ${liveData.user.lastName}`}
            </h1>
            <h1 className="text-neutral-500 text-center rounded-md mb-4">
              {liveData.user.userEmail}
            </h1>
          </div>

          <div className="space-y-6">
            {liveData.links.links.map((link: LinkItem) => {
              const Icon = platformMap.get(link.platform)?.icon;
              const color = platformMap.get(link.platform)?.color;

              return (
                <a
                  key={link.link}
                  href={link.link}
                  style={{ backgroundColor: color }}
                  className="h-14 min-w-80 hover:shadow-md hover:shadow-primary-500 rounded-md text-white flex justify-between items-center p-4"
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
      ) : (
        <div className="bg-white p-10 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="m-8">
            <div className="flex justify-center">
              <img
                src={user?.profilePic}
                className="w-24 h-24 rounded-full mb-2"
                alt="Profile"
              />
            </div>
            <h1 className="text-2xl h-6 font-bold text-neutral-600 text-center mb-2">
              {`${user?.firstName} ${user?.lastName}`}
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
                  className="h-14 min-w-80 hover:shadow-md hover:shadow-primary-500 rounded-md text-white flex justify-between items-center p-4"
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
      )}
    </div>
  );
};

export default PreviewLinks;
