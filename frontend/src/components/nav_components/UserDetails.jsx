export default function UserDetails({
  userName = "User Name",
  premiumState = false,
}) {
  const isPremium = () => {
    if (premiumState === true) return <p className="text-[#25e9a6]">Premium</p>;
    return null;
  };
  
  return (
    <div className="cursor-pointer flex justify-center items-center" id="card">
      <div className="w-[68px] h-[68px] rounded-full overflow-hidden">
        <img
          className="h-[68px] w-[68px] object-cover"
          src="/images/userimg.jpg"
          alt="User Image"
        />
      </div>
      <div className="ml-3">
        <div className="font-bold text-2xl translate-y-1 text-white">
          {userName}
        </div>
        {isPremium()}
      </div>
    </div>
  );
}
