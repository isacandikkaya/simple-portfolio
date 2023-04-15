import Activities from "../components/UI/Activities.jsx";
import Techs from "../components/UI/Techs.jsx";
import Repos from "../components/UI/About.jsx";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home | Rubble</title>
      </Head>
      <Activities />
      <Repos />
      <Techs />
    </>
  );
}
