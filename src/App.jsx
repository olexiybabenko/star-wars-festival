// import
import { useState } from "react";
// Components
import Header from "./components/Header"; // Header component
import Section from "./components/Section"; // Section component
import Button from "./components/Button"; // Button component
import Signature from "./components/Signature"; // Signature component
// Images
import logo from "./assets/star-wars-logo.png";
import section1BgImage from "./assets/section1-bg-image.jpg";
import chewbacca from "./assets/chewbacca.png";
import section3BgImage from "./assets/section3-bg-image.jpg";
import section4BgImage from "./assets/section4-bg-image.jpg";

// Data
import { HEADER_ELEMENTS, ATTRACTIONS } from "./data"; // Array with list of header elements

function App() {
  // useState - watch the atraction chosen
  const [selectedAtraction, setSelectedAtraction] = useState("Cosplay Zone");
  // handleSelectatraction - function watched by useState to choose the atraction
  function handleSelectatraction(selectedAtraction) {
    // use setatraction - so that it would be watched by useState
    setSelectedAtraction(selectedAtraction);
  }

  // JSX Output
  return (
    <>
      {/* Header component */}
      <Header websiteLogo={logo} headerElements={HEADER_ELEMENTS} />
      {/* First section */}
      <Section
        backgroundImage={section1BgImage}
        title={"Star Wars Festival"}
        className={"!pt-16 md:!pt-20 "}
      >
        <p className="text-center sm:text-lg md:text-xl lg:text-2xl pt-1">
          The biggest Star Wars Festival in Poland
        </p>
        <Button text={"Get a ticket"} className={"mt-10"} href={"#tickets"} />
      </Section>
      {/* About us section */}
      <Section id={"about"} className={"max-w-screen-lg"}>
        {/* Flexbox with 2 columns */}
        <div className="flex flex-wrap md:flex sm:flex-nowrap gap-5 md:gap-10 justify-around">
          {/* Column 1: Text */}
          <div className=" max-w-96">
            <h1 className="text-center sm:text-start text-wrap  text-3xl md:text-4xl  font-semibold">
              About us
            </h1>
            <p className="text-wrap text-justify pt-1 sm:pt-2 lg:text-lg">
              Join us during the VI edition of Star Wars Festival, New date
              coming soon at Ptak Warsaw Expo! Meet your favourite actors face
              to face during panels, see fantastic Cosplay Shows, and enjoy
              amazing atractions we prepared for you. You can also get a picture
              & an autograph with a chosen guest.
            </p>
          </div>
          {/* Special guest: Chebbaka */}
          <div className="max-w-64 lg:max-w-72 lg:my-auto pt-1">
            <img
              src={chewbacca}
              alt="Special guest Chewbacca"
              className="max-w-full"
            />
            <Signature text={"Special Guest"} />
          </div>
        </div>
      </Section>
      {/* Cosplay section */}
      <Section
        id={"cosplay"}
        backgroundImage={section3BgImage}
        title={"Cosplay"}
        className={"py-32 sm:pb-36 bg-top"}
      >
        <p className="text-wrap text-center pt-1 sm:pt-2 lg:text-lg">
          Cosplay is the most spectacular atraction at Star Wars Festival,
          thousands of Cosplayers walking around other visitors and showing
          their skills at various contests. We host Cosplay guests from around
          the world, and our Polish Cosplayers, who are perceived as extremely
          skilled.
        </p>
      </Section>
      {/* Atraction section */}
      <Section id={"atractions"} title={"Atractions"}>
        {/* Flexbox of atraction tabs */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-1 pt-3">
          {ATTRACTIONS.map((atraction) => (
            <Signature
              key={atraction.title}
              text={atraction.title}
              onClick={() => handleSelectatraction(atraction.title)}
              isSelected={selectedAtraction === atraction.title}
              className={"px-1"}
            />
          ))}
        </div>
        {/* Tab content that is displayed based on the atraction chosen */}
        <p className="text-wrap text-center lg:text-lg py-2 px-4 mt-3 rounded bg-neutral-800">
          {
            ATTRACTIONS.find((obj) => obj.title === selectedAtraction)
              .description
          }
        </p>
      </Section>
      {/* For exhibitors section */}
      <Section
        id={"exhibitors"}
        className={" !px-0 !py-0"}
        fullWidth={true}
        backgroundImage={section4BgImage}
      >
        {/* Flexbox of 2 columns */}
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Column 1: Text */}
          <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-10 md:pb-12 md:pr-16 lg:pr-20 md:basis-7/12 xl:px-28 bg-yellow-400 !text-black md:diagonal-clip-path">
            <h1 className="text-center md:text-start text-wrap  text-3xl md:text-4xl  font-semibold">
              For exhibitors
            </h1>
            <p className="text-wrap text-justify pt-1 sm:pt-2 lg:text-lg">
              Our festiwal is a great opportunity not only to sell your wares,
              but to reach thousands of recipients through direct marketing &
              online marketing. We have over 120 000 engaged fans, millions of
              views and thanks to our guests every media outlet talks about us.
            </p>
            {/* Button to call the modal */}
          </div>
        </div>
      </Section>
    </>
  );
}

export default App;
