import Main from "./components/Main";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="h-screen w-screen font-ubuntu flex justify-center items-center bg-gradient-to-r from-purple-700 to-pink-500">
      <div className="h-[95%] w-[95%] bg-[#2d3843] rounded-large flex-col justify-center box-border">
        <Nav />
        <Main />
      </div>
    </div>
  );
}
