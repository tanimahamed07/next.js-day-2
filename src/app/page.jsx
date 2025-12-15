import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 min-h-screen justify-center text-center items-stretch">
      <h2 className="text-4xl font-bold">Next Jd Fetching & Rendering</h2>
      <h2 className="text-8xl absolute inset-0 -top-20 opacity-10"></h2>
      <div>
        <div>
          <button className="btn">Lets Explore</button>
        </div>
      </div>
    </div>
  );
}
