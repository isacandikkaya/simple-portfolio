export default function Footer() {
  const date = new Date();
  return (
    <div>
      <div className="pt-10 sm:flex items-center justify-between">
        <div className="relative w-full sm:w-1/2">
          <div className="ml-24 sm:ml-0 w-24 h-24 rounded-lg shadow-xl shadow-red-800/20 bg-gradient-to-bl from-indigo-500 to-blue-500" />
          <h1 className="select-none heading-text absolute bottom-5 left-28 sm:left-5 text-3xl text-white font-bold text-center">
            {date.getFullYear()}, Rubble
          </h1>
        </div>
        <h1 className="mt-2 sm:mt-0 select-none text-normal text-white font-light text-center">
          Developed with by unknowN
        </h1>
      </div>
    </div>
  );
}
