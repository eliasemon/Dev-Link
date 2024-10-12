import { useEffect, useState } from 'react';

import { useStore } from '@/store/store';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getApiUrl } from '@/utils';
import Spinner from '@/components/Spinner';
import { Link as LinkItem } from '@/store/LinkSlice';
import { User } from '@/store/authSlice';
import useSWRMutation from 'swr/mutation';
import CardsLoader from './CardsLoader';

// Interface for the live data fetched from the API
interface LiveData {
  user: (User & { id: string }) | null;
  links: {
    links: LinkItem[];
  };
}

/**
 * Fetcher function to retrieve live data from the API
 *  - API endpoint URL
 *  - Promise resolving to the live data
 */
const fetcher = (url: string) =>
  fetch(url).then((res) => res.json() as Promise<LiveData>);

/**
 * PreviewLinks component handles the logic for fetching user and links data,
 * copying shareable link, and rendering the CardsLoader component.
 * returns JSX.Element
 */
const PreviewLinks = () => {
  const { user, isProfileDraft, islinkDraft } = useStore((state) => state);
  const links = useStore((state) => state.links);
  const { userId } = useParams();
  const navigate = useNavigate();
  const {
    data: liveData,
    trigger,
    isMutating,
    error,
  } = useSWRMutation(getApiUrl(`previewlinks/${userId || user?._id}`), fetcher);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  useEffect(() => {
    // Navigate to home if no user data or userId is present
    if (!user && !userId) {
      navigate('/');
    }
  }, [user, userId, navigate]);

  useEffect(() => {
    // Trigger data fetch if userId is available
    if (userId) {
      trigger();
    }
  }, [userId, user, trigger]);

  /**
   * Copies the generated link to the clipboard
   */
  const copyText = () => {
    const textToCopy = `${import.meta.env.VITE_CLIENT_URL ? import.meta.env.VITE_CLIENT_URL : window.location.href}/${userId || user?._id}`;

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
    <div className="w-full md:h-[100vh] md:flex md:justify-center z-50 absolute top-0 left-0">
      <div className="h-1/2 w-full md:bg-primary-900 md:rounded-b-3xl">
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
        <div className="container mx-auto flex justify-center items-center rounded-lg py-2 px-6 mt-4">
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

      {isMutating && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary-900 p-4 rounded-lg shadow-lg">
          <Spinner />
        </div>
      )}

      {userId && error && (
        <div className="m-5 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-destructive text-white p-4 rounded-lg shadow-lg">
          <h1 className="text-6xl p-10 text-center">
            404 User's Links Not Found
          </h1>
        </div>
      )}

      {userId && !isMutating && !error && liveData && (
        <CardsLoader user={liveData.user} links={liveData.links.links} />
      )}
      {!userId && user && <CardsLoader user={user} links={links} />}
    </div>
  );
};

export default PreviewLinks;
