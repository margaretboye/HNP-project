import React from "react";
import BlogImage1 from "../../../assets/images/blog-img1.webp";
import BlogImage2 from "../../../assets/images/blog-img2.webp";
import BlogImage3 from "../../../assets/images/blog-img4.webp";
import Underline from "../../../assets/images/underline.webp";
import ResourcesCard from "../../../components/ResourcesCard";
import SectionHeading from "../../../components/SectionHeading";

const Resources = () => {
  return (
    <article className="pt-[120px]">
      <SectionHeading heading={"Resources"} subHeading={"Lorem ipsum dolor"} />

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
            blogImage={BlogImage2}
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
            blogImage={BlogImage3}
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
