export default function RHalf({ artistName }) {
  return (
    <div className="mb-7 col-span-3 mt-7 flex justify-center items-center overflow-hidden">
      <div className="h-full w-full">
        <div className="h-[37%] rounded-t-large bg-gradient-to-r from-red-500 to-red-400">
          <div className="relative h-full">
            <div className="h-full flex justify-center">
              <img
                className="h-full max-w-full opacity-60 rounded-t-large"
                src="/images/artist_image-removebg.png"
                alt="Image"
              />
            </div>
            <p className="absolute bottom-0 w-full h-[20%] text-white font-bold text-5xl text-center bg-gradient-to-t from-[#580f0f] to-transparent">
              {artistName}
            </p>
          </div>
        </div>  

        <div className="h-[63%] rounded-b-large bg-[#74809b] overflow-auto flex-col justify-center">
          <div className="flex justify-between items-center h-[17%] w-[95%] mx-auto mt-3">
            <div className="flex gap-5 items-center h-full w-full">
              <div className="h-[70%] ml-1 w-auto rounded-xl">
                <img
                  className="h-full w-full object-cover rounded-md"
                  src="/images/albumcover.jpg"
                  alt="Song album picture"
                />
              </div>
              <div className="font-semibold text-white text-2xl">Song name</div>
            </div>
            <div className="font-semibold text-white text-lg mr-5">0:00</div>
            <button className="font-semibold text-[25px] mr-5">
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
