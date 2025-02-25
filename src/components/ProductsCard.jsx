import React from "react";

const ProductsCard = ({ alt, figCaption, size, image, width, height }) => {
  return (
    <div className="border-[1.5] rounded-[20px]">
      <div>
        <img
          src={image}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
        />
        <figcaption>
          {figCaption} <br />
          {size}
        </figcaption>
      </div>
    </div>
  );
};

export default ProductsCard;
