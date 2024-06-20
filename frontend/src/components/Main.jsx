import LHalf from "./LHalf";
import RHalf from "./RHalf";

export default function Main() {
  return (
    <main className="h-[calc(100%-10%-24px)] w-[85vw] mx-auto grid grid-cols-10 rounded-large">
      <LHalf songName={"Heartbeat"} artistName={"KSHMR"} duration={"0:00"} />
      <RHalf artistName={"KSHMR"}/>
    </main>
  );
}
