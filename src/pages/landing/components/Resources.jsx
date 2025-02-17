import React from "react";
import BlogImage1 from "../../../assets/images/blog-img1.webp";
import { FaTag } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import ResourcesCard from "../../../components/ResourcesCard";

const Resources = () => {
  return (
    <article className="pt-[120px]">
      <section className=" ml-5 ">
        <div className="flex items-center  px-3">
          <ResourcesCard
            blogImage={BlogImage1}
            alt={"A man harvesting crops"}
            width={615}
            height={522}
            day={"23"}
            monthYear={"Jan 2023"}
            author={"Hardson"}
            category={"Bread, Fruits"}
            postTitle={"The Importance of Fruits in Your Life"}
            contentOfPost={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus odio, egestas vitae augue sed, vulputate viverra velit."
            }
          />
          <ResourcesCard
            blogImage={BlogImage1}
            alt={"A man harvesting crops"}
            width={615}
            height={522}
            day={"23"}
            monthYear={"Jan 2023"}
            author={"Hardson"}
            category={"Bread, Fruits"}
            postTitle={"The Importance of Fruits in Your Life"}
            contentOfPost={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus odio, egestas vitae augue sed, vulputate viverra velit."
            }
          />
          <ResourcesCard
            blogImage={BlogImage1}
            alt={"A man harvesting crops"}
            width={615}
            height={522}
            day={"23"}
            monthYear={"Jan 2023"}
            author={"Hardson"}
            category={"Bread, Fruits"}
            postTitle={"The Importance of Fruits in Your Life"}
            contentOfPost={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus odio, egestas vitae augue sed, vulputate viverra velit."
            }
          />
        </div>
      </section>
    </article>
  );
};

export default Resources;
