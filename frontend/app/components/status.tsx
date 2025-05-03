const Status = () => {
  return (
    <div>
      <h1 className="font-bold mb-8">Máquinas em uso</h1>

      <div className="grid grid-cols-2 sm:flex flex-row justify-between w-full gap-2">
        <div className="h-30 relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] sm:max-w-1/4 w-full flex-grow">
          <div className="absolute w-full h-full sm:flex flex-col justify-evenly p-5">
            <p className="">Livre</p>
            <p className="text-3xl text-black font-bold">2</p>
          </div>
        </div>

        <div className="h-30 relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] sm:max-w-1/4 w-full flex-grow">
          <div className="absolute w-full h-full sm:flex flex-col justify-evenly p-5">
            <p className="">Em uso</p>
            <p className="text-3xl text-black font-bold">2</p>
          </div>
        </div>

        <div className="col-span-2 h-30 relative border-2 rounded-2xl border-[rgba(44,150,80,0.25)] sm:max-w-1/4 w-full flex-grow">
          <div className="absolute w-full h-full sm:flex flex-col justify-evenly p-5">
            <p className="">Em espera</p>
            <p className="text-3xl text-black font-bold">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
