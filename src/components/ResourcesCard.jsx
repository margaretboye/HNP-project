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
      <div className="absolute left-4 bg-red-500 py-6 top-5 px-4 flex flex-col items-center rounded-full">
        <span className="block">{day}</span>
        <span className="block">{monthYear}</span>
      </div>

      {/* News */}
      <div className="p- flex items-center">
        <div className="flex flex-col items-center p-4">
          <div className="flex gap-[18px]">
            <span className="flex items-center gap-2">
              <IoPersonOutline />
              {author}
            </span>
            <span className="flex items-center gap-2">
              <FaTag />
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
