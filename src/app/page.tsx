import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen justify-center space-y-2">
        <div className="flex justify-center">
          <p className="text-white text-4xl">Gather mate</p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center border justify-center bg-accent border-none rounded-xl space-y-2 p-4 shadow-lg">
            <div className="flex">
              <p className="text-white">You can sign in with:</p>
            </div>
            <div className="flex ">
              <button className="opacity-50 hover:opacity-100">
                <Image src="/google_icon.svg" alt="" width={50} height={50} />
              </button>
              <button className="opacity-50 hover:opacity-100">
                <Image src="/facebook_icon.svg" alt="" width={50} height={50} />
              </button>
              <button className="opacity-50 hover:opacity-100">
                <Image src="/twitter_icon.svg" alt="" width={50} height={50} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
