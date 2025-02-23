import React from "react";
import { FaTag } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const ResourcesCard = ({
  blogImage,
  alt,
  width,
  height,
  day,
  monthYear,
  author,
  category,
  postTitle,
  contentOfPost,
}) => {
  return (
    <div className="relative mr-5">
      {/* Blog Image */}
      <div>
        <img
          src={blogImage}
          alt={alt}
          loading="lazy"
          title="blog image"
          width={width}
          height={height}
          className="rounded-[20px]  "
        />
      </div>

      {/* Date */}
      <div className="absolute left-4 bg-mustard-yellow py-6 top-5 px-4 flex flex-col justify-center text-center rounded-full w-24 h-24">
        <span className=" color-[#52320a] font-bold text-4xl">{day}</span>
        <span className=" text-base leading-[1] font-bold">{monthYear}</span>
      </div>

      {/* News */}
      <div className="p- flex items-center">
        <div className="flex flex-col items-center p-4">
          <div className="flex gap-[18px]">
            <span className="flex items-center gap-2">
              <span className="bg-[#278d45]">
                <IoPersonOutline className="text-white" />
              </span>
              {author}
            </span>
            <span className="flex items-center gap-2">
              <FaTag className="text-[#278d45]" />
              {category}
            </span>
          </div>
          <h4 className="text-2xl text-center font-semibold">{postTitle}</h4>
          <div>
            <p>{contentOfPost}</p>
          </div>
          <div>Continue reading</div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
