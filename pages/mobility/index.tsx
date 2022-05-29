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
  const [currentActive, setActive] = useState(Number);
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
          isHidden ? "" : "hidden "
        }container max-w-2xl flex flex-col justify-center`}
      >
        <h1 className="text-6xl text-center mb-6">
          {steps.categories.clothing[currentActive].title}
        </h1>
        <p className="text-lg text-center break-words">
          {steps.categories.clothing[currentActive].description}
        </p>
      </div>
      <div
        className={`${
          isHidden ? "hidden " : ""
        }container max-w-2xl grid grid-cols-5 grid-rows-7 gap-9`}
      >
        <div className="flex justify-center col-start-3">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[0].title}
            onClick={toggleStep}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-2">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[1].title}
            onClick={(): void => {
              toggleStep();
              setActive(1);
            }}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-4">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[2].title}
            onClick={(): void => {
              toggleStep();
              setActive(2);
            }}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-1">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[3].title}
            onClick={(): void => {
              toggleStep();
              setActive(3);
            }}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-5">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[4].title}
            onClick={(): void => {
              toggleStep();
              setActive(4);
            }}
          ></StoryButton>
        </div>
        <h1 className="col-start-2 col-span-3 text-center text-2xl md:text-6xl transition-transform hover:scale-125 cursor-default">
          Mobilität
        </h1>
        <div className="flex justify-center col-start-1">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[5].title}
            onClick={(): void => {
              toggleStep();
              setActive(5);
            }}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-5">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[6].title}
            onClick={(): void => {
              toggleStep();
              setActive(6);
            }}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-2">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[7].title}
            onClick={(): void => {
              toggleStep();
              setActive(7);
            }}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-4">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[8].title}
            onClick={(): void => {
              toggleStep();
              setActive(8);
            }}
          ></StoryButton>
        </div>
        <div className="flex justify-center col-start-3">
          <StoryButton
            className="transition-transform hover:scale-125"
            color="#B93C0D"
            text={steps.categories.mobility[9].title}
            onClick={(): void => {
              toggleStep();
              setActive(9);
            }}
          ></StoryButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
