const ProfileCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-stone-900 rounded-[40px] p-3">
      <div className="w-full max-w-sm mx-auto bg-white border border-stone-900 rounded-[40px] p-8">
        <div className="flex justify-center">
          <div className="w-52 h-7  bg-white  border-b border-l border-r border-stone-900 rounded-t-[-44px] rounded-b-[34px] mt-[-33px]"></div>
        </div>
        {/* Profile Image Placeholder */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
        </div>
        {/* Name Placeholder */}
        <div className="h-6 bg-gray-200 rounded-md mb-2"></div>
        {/* Description Placeholder */}
        <div className="h-4 bg-gray-200 rounded-md mb-4"></div>
        {/* Button Placeholders */}
        <div className="space-y-3">
          <div className="h-10 bg-gray-200 rounded-md"></div>
          <div className="h-10 bg-gray-200 rounded-md"></div>
          <div className="h-10 bg-gray-200 rounded-md"></div>
          <div className="h-10 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
