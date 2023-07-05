"use client";
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcon";
import Wrapper from "./Wrapper";

function ProfileCard({ className = "border-b-0" }: { className: any }) {
  const onClick = (url) => {
    if (typeof window !== undefined) {
      window.open(url);
    }
  };
  return (
    <Wrapper className={className}>
      <div className="relative flex justify-center mx-4 my-2">
        <img
          className="w-40 h-40 px-2 py-2 rounded-2xl"
          src="/img/myphoto.jpeg"
          alt="profile"
        />
        <div className="absolute bottom-0 w-4 h-4 -mt-2 bg-green-600 rounded-full right-22 lg:right-8 "></div>
      </div>
      <div className="my-4 text-center">
        <h1 className="text-2xl font-bold tracking-wider text-center">
          Hy! I&apos;m Ilman S
        </h1>
        <p className="font-light text-teal-300 animate-typing f text--green-600">
          Full Stack Developer
        </p>
      </div>
      <div className="my-2 space-y-2 text-sm text-center lg:my-10 font-poppins text-zinc-400">
        <p className="border-b border-zinc-400">ilmansunannudin2@gmail.com</p>
        <p className="inline-block border-b border-zinc-400">
          +62822-9885-9671
        </p>
      </div>
      <div className="mt-8 lg:mt-20 ">
        <div className="flex items-center justify-center gap-6">
          <InstagramIcon
            onClick={() => {
              onClick("https://instagram.com/ilman_sn");
            }}
            className="w-5 h-5 cursor-pointer"
          />
          <TwitterIcon
            onClick={() => {
              onClick("https://twitter.com/ilman_sn");
            }}
            className="w-5 h-5 cursor-pointer"
          />
          <FacebookIcon
            onClick={() => {
              onClick("https://facebook.com/ilman_sn");
            }}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-8 space-y-2 text-center">
        <button className="px-16 py-2 font-semibold transition-all duration-75 bg-teal-400 rounded-full dark:text-white hover:bg-teal-800 hover:text-white">
          Hire Me!
        </button>
        <a
          href="https://drive.google.com/file/d/1ZQbpRj5sQ7519SawlO0c5cSjCF-gXCWK/view?usp=drive_link"
          className="block px-12 py-2 font-semibold text-white transition-all duration-75 rounded-full bg-zinc-700 hover:bg-teal-800 hover:text-white">
          Download CV
        </a>
      </div>
    </Wrapper>
  );
}

export default ProfileCard;
