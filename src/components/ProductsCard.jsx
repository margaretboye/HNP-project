import React from "react";

const ProductsCard = ({ alt, figCaption, size, image, width, height }) => {
  return (
    <div className=" rounded-[20px] shadow-lg hover:shadow-2xl sm:flex sm:flex-col sm:items-center">
      <div className="">
        <img
          src={image}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="hover:scale-110 duration-500"
        />
      </div>
      <figcaption className="pb-10 text-center">
        <span className=" leading-5 text-[18px] font-medium">{figCaption}</span>
        <br />
        <span className="text-sm ">{size}</span>
      </figcaption>
    </div>
  );
};

export default ProductsCard;
