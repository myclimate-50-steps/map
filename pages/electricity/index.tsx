import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import { auth } from "../../firebase/clientApp";
import { useRouter } from "next/router";
import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { StoryButton } from "../../stories/components/StoryButton/StoryButton";
import { Navbar } from "../../stories/components/navbar/Navbar";

import steps from "../steps.json";

const Home: NextPage = () => {
  const [isHidden, setHidden] = useState(false);
  const router = useRouter();
  React.useEffect((): void => {
    setPersistence(auth, browserLocalPersistence).then((): void => {
      if (!auth.currentUser) {
        router.push("/login");
      }
    });
  });
  const toggleStep = (): void => {
    setHidden((prev) => !prev);
    console.log(isHidden);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>50 - Steps - Map</title>
        <meta name="description" content="MyClimate Map" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div
        className={`${
          isHidden ? "hidden " : ""
        }container max-w-2xl grid grid-cols-5 grid-rows-7 gap-9`}
      >
        <div className="flex justify-center col-start-3">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[0].title}
            onClick={toggleStep}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-2">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[1].title}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-4">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[2].title}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-1">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[3].title}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-5">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[4].title}
          ></StoryButton>
        </div>
        <h1 className="col-start-2 col-span-3 text-center text-6xl transition-transform hover:scale-125 cursor-default">
          Elektronik
        </h1>
        <div className="flex justify-center col-start-1">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[5].title}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-5">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[6].title}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-2">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[7].title}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-4">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[8].title}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-3">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#698E0F"
            text={steps.categories.electricity[9].title}
          ></StoryButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
