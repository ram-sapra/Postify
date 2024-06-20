export default function MusicPlayer({songName, artistName, duration}) {
  return (
    <div className="h-auto bg-gradient-to-r from-[#74809b] text-white to-transparent rounded-[45px] mt-7 w-[95%]">
      <div className="h-[15em] flex justify-start items-center">
        <div className="container relative inline-block h-[12em] w-[12em] rounded-3xl mx-20 hover:opacity-50">
          <img
            className="container-img h-full w-full object-cover rounded-xl"
            src="/images/albumcover.jpg"
            alt="Album Cover Pic"
          />
        </div>
        <div className="h-[12em] w-[45%] flex-col">
          <div className="h-[53%]">
            <h1 className="font-bold text-6xl">{songName}</h1>
            <h1 className="font-semibold text-2xl text-right mt-1">
              By {artistName}
            </h1>
          </div>
          <div className="h-[47%] flex-col">
            <input
              className="mt-1 w-full h-[6px] bg-white"
              type="range"
              name="progressBar"
              id="progressBar"
            />
            <div className="flex justify-between font-medium items-center">
              <span>0:00</span>
              <span>{duration}</span>
            </div>
            <div className="flex justify-center items-center gap-7">
              <button>
                <i className="fa !text-[28px] fa-shuffle"></i>
              </button>
              <button>
                <i className="fas !text-[40px] fa-step-backward"></i>
              </button>
              <button>
                <i className="far !text-[40px] fa-play-circle"></i>
              </button>
              <button>
                <i className="fas !text-[40px] fa-step-forward"></i>
              </button>
              <button>
                <i className="fa !text-[28px] fa-repeat"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
