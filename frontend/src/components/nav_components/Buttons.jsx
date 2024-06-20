import Settings from "./Settings";

export default function Buttons() {
  return (
    <div className="h-[70%] flex gap-5">
      <Settings />

      <div className="h-[100%] aspect-square grid place-content-center bg-[#aaadaf] rounded-full">
        <button>
          <i className="fa-solid !text-4xl !text-[#222] fa-toggle-on"></i>
        </button>
      </div>
    </div>
  );
}
