"use client";
import React from "react";
import Wrapper from "../../components/Wrapper";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../components/SocialIcon";

function Share() {
  const shareToSocialMedia = (platform) => {
    if (typeof window !== undefined) {
      const url = encodeURIComponent(window.location.href);

      switch (platform) {
        case "instagram":
          window.open(
            `https://www.instagram.com/sharer.php?u=${url}`,
            "_blank"
          );
          break;
        case "twitter":
          window.open(`https://twitter.com/share?url=${url}`, "_blank");
          break;
        case "facebook":
          window.open(`https://www.facebook.com/sharer.php?u=${url}`, "_blank");
          break;
        default:
          break;
      }
    }
  };
  return (
    <Wrapper className="mt-6 text-sm">
      <h2 className="text-lg">Share on Social Media</h2>
      <button
        onClick={() => {
          shareToSocialMedia("instagram");
        }}
        className="flex items-center gap-2 mt-4">
        <InstagramIcon className="w-6 h-6" /> Share to Instagram
      </button>
      <button
        onClick={() => {
          shareToSocialMedia("twitter");
        }}
        className="flex items-center gap-2 mt-4">
        <TwitterIcon className="w-6 h-6" /> Share to Instagram
      </button>
      <button
        onClick={() => {
          shareToSocialMedia("facebook");
        }}
        className="flex items-center gap-2 mt-4 ">
        <FacebookIcon className="w-6 h-6" /> Share to Facebook
      </button>
    </Wrapper>
  );
}

export default Share;
