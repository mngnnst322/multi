import { Image } from "./components/Image";


export default function Home() {
  return <div className="w-full h-screen  flex justify-center items-center bg-[#f4f4f4]">

<div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-2xl">
  <div>
  <Image/>
  <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
  <p className="text-lg text-[#8E8E8E]">Please provide all current information accurately.</p>
  </div>
  <div className="space-y-2" 
  ></div>
</div>
  </div>;
}
