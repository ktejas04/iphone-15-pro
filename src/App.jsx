import Chips from "./components/Chips";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <Chips/>
      <Footer/>

    </main>
  );

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
};

export default Sentry.withProfiler(App);
