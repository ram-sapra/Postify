import MusicPlayer from "./LHalf_components/MusicPlayer";

export default function LHalf({ songName, artistName, duration}) {
  return (
    <div className="h-full col-span-7 flex flex-col overflow-hidden">
      <MusicPlayer artistName={artistName} songName={songName} duration={duration}/>
      <div className="h-auto flex justify-between items-center w-[95%] mt-4">
        <span className="font-bold text-white text-2xl">Recommendation</span>
        <button className="bg-[#242d37] border text-green-500 px-10 rounded-lg border-green-500 mr-6">
          Filter
        </button>
      </div>
      <div className="max-h-[calc(100%-370px)] w-[96%] overflow-auto">
        <div className="flex justify-between items-center h-[120px] mt-6 w-[99%] bg-[#74809b] rounded-3xl">
          <div className="h-[80%] ml-6 w-auto rounded-xl">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="/images/albumcover.jpg"
              alt="Song album picture"
            />
          </div>
          <div className="w-[25%] font-bold flex justify-start items-center text-white text-4xl">
            {songName}
          </div>
          <div className="w-[30%] font-bold text-xl">{artistName}</div>
          <div className="font-semibold text-white text-[22px]">{duration}</div>
          <button className="font-semibold text-[25px] mr-10">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
