import React, { useState } from "react";
import styles from "./StoryButton.module.css";

interface StoryButtonProps {
  color: string;
  active?: boolean;
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler;
}

export const StoryButton = ({
  color = "#000",
  active = false,
  text = "Lorem ipsum dolor sit amet.",
  className = "",
  onClick,
}: StoryButtonProps) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      className={`flex flex-col w-16${className ? " " + className : ""}`}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        xmlSpace="preserve"
        className="hover:cursor-pointer w-12 mb-1 self-center"
        onMouseOver={(): void => {
          setHovered(true);
        }}
        onMouseOut={(): void => {
          setHovered(false);
        }}
      >
        <g>
          <path
            fill={color}
            d="M500,10C229.8,10,10,229.8,10,500c0,270.2,219.8,490,490,490c270.2,0,490-219.8,490-490C990,229.8,770.2,10,500,10z M500,885.5c-212.6,0-385.5-172.9-385.5-385.5c0-212.6,172.9-385.5,385.5-385.5S885.5,287.4,885.5,500C885.5,712.6,712.6,885.5,500,885.5z"
          />
          <path
            fill={active || isHovered ? color : "#000"}
            className={`ease-in-out duration-300`}
            d="M264.9,500c0,129.8,105.2,235.1,235.1,235.1c129.8,0,235.1-105.2,235.1-235.1c0-129.8-105.2-235.1-235.1-235.1C370.2,264.9,264.9,370.2,264.9,500z"
          />
        </g>
      </svg>
      <p className="font-light break-words text-center text-xs line-clamp-2">
        {text}
      </p>
    </div>
  );
};
