import Techs2 from "../Techs2";
export default function Techs() {
  return (
    <div className="w-full py-10">
      <div className="relative w-full">
        <div className="ml-auto w-24 h-24 rounded-lg shadow-xl shadow-green-800/20 bg-gradient-to-bl from-emerald-600 to-green-800" />
        <h1 className="heading-text absolute bottom-5 right-5 text-3xl text-white font-bold text-center">
          Technologies I use
        </h1>
      </div>
      <div className="gap-2 p-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Techs2 title={"JavaScript"} img={"/img/techs/javascript.svg"} />
        <Techs2 title={"React"} img={"/img/techs/react.svg"} />
        <Techs2 title={"NextJS"} img={"/img/techs/next.svg"} />
        <Techs2 title={"CSS"} img={"/img/techs/css.svg"} />
        <Techs2 title={"HTML"} img={"/img/techs/html.svg"} />
        <Techs2 title={"Font Awesome"} img={"/img/techs/fontawesome.png"} />
        <Techs2 title={"Github"} img={"/img/techs/github.svg"} />
        <Techs2 title={"NodeJS"} img={"/img/techs/node.svg"} />
        <Techs2 title={"C#"} img={"/img/techs/c-1.svg"} />
        <Techs2 title={"PHP"} img={"/img/techs/php-1-logo.svg"} />
      </div>
    </div>
  );
}
