import Machines from "./components/machines";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <h1>
        Máquinas em uso
      </h1>

      <div className="flex flex-row justify-evenly w-full sm:h-40 p-5 gap-x-2">
        <div className="justify-center relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] aspect-square sm:max-w-1/4 w-1/5 sm:flex-grow">
            <div className="absolute w-full h-full hidden sm:flex flex-col justify-evenly p-5">
              <p className="text-xl text-black font-extralight">Livre</p>
              <p className="text-3xl text-black font-bold">2</p>

            </div>
          <p className="absolute top-1/2 left-1/2 -translate-1/2 text-3xl text-black font-bold sm:hidden">1</p>
          <p className="absolute bottom-full left-1/2 -translate-x-1/2 text-md font-extralight sm:hidden">Livre</p>

        </div>


        <div className="justify-center relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] aspect-square sm:max-w-1/4 w-1/5 sm:flex-grow">
            <div className="absolute w-full h-full hidden sm:flex flex-col justify-evenly p-5">
              <p className="text-xl text-black font-extralight">Em uso</p>
              <p className="text-3xl text-black font-bold">2</p>

            </div>
          <p className="absolute top-1/2 left-1/2 -translate-1/2 text-3xl text-black font-bold sm:hidden">1</p>
          <p className="absolute bottom-full left-1/2 -translate-x-1/2 text-md font-extralight sm:hidden">Livre</p>

        </div>


        <div className="justify-center relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] aspect-square sm:max-w-1/4 w-1/5 sm:flex-grow">
            <div className="absolute w-full h-full hidden sm:flex flex-col justify-evenly p-5">
              <p className="text-xl text-black font-extralight">Em espera</p>
              <p className="text-3xl text-black font-bold">2</p>

            </div>
          <p className="absolute top-1/2 left-1/2 -translate-1/2 text-3xl text-black font-bold sm:hidden">1</p>
          <p className="absolute bottom-full left-1/2 -translate-x-1/2 text-md font-extralight sm:hidden">Livre</p>

        </div>

      </div>

      <Machines/>

    </div>
  );
}
