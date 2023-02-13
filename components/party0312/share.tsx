const WebShare = () => {
  const shareData = {
    title: "GGRF0312에 초대합니다.",
    text: "스윙댄스 영화/원데이 강습/소셜파티/공연/대회를 하루에 모두 경험해 보세요.",
    url: "https://gentlegifters.github.io/ggrf0312",
  };

  return (
    <div
      onClick={async () => {
        await navigator.share(shareData);
      }}
      className="z-30 fixed right-0 bottom-24 bg-gray-700 text-white text-xs sm:text-sm font-semibold rounded-l-lg flex items-center py-3 px-2 sm:px-5 cursor-pointer"
    >
      공유하기
    </div>
  );
};

export default WebShare;
