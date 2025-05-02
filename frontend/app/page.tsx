import Welcome from "./components/welcome";
import Navbar from "./components/navbar";
import ProgressBar from "./components/progressbar";

export default function Home() {
  return (
    <div>
      <h1>
        Máquinas em uso
      </h1>

      <div className="flex flex-row justify-between w-full sm:h-30 gap-x-2">
        <div className="justify-center relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] aspect-square sm:max-w-1/4 w-1/5 sm:flex-grow">
            <div className="absolute w-full h-full hidden sm:flex flex-col justify-evenly p-5">
              <p className="">Livre</p>
              <p className="text-3xl text-black font-bold">2</p>

            </div>
          <p className="absolute top-1/2 left-1/2 -translate-1/2 text-3xl text-black font-bold sm:hidden">1</p>
          <p className="absolute bottom-full left-1/2 -translate-x-1/2 text-md font-extralight sm:hidden">Livre</p>

        </div>


        <div className="justify-center relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] aspect-square sm:max-w-1/4 w-1/5 sm:flex-grow">
            <div className="absolute w-full h-full hidden sm:flex flex-col justify-evenly p-5">
              <p className="">Em uso</p>
              <p className="text-3xl text-black font-bold">2</p>

            </div>
          <p className="absolute top-1/2 left-1/2 -translate-1/2 text-3xl text-black font-bold sm:hidden">1</p>
          <p className="absolute bottom-full left-1/2 -translate-x-1/2 text-md font-extralight sm:hidden">Livre</p>

        </div>


        <div className="justify-center relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] aspect-square sm:max-w-1/4 w-1/5 sm:flex-grow">
            <div className="absolute w-full h-full hidden sm:flex flex-col justify-evenly p-5">
              <p className="">Em espera</p>
              <p className="text-3xl text-black font-bold">2</p>

            </div>
          <p className="absolute top-1/2 left-1/2 -translate-1/2 text-3xl text-black font-bold sm:hidden">1</p>
          <p className="absolute bottom-full left-1/2 -translate-x-1/2 text-md font-extralight sm:hidden">Livre</p>

        </div>

      </div>

      <Welcome/>
      <ProgressBar/>

    </div>
  );
}
