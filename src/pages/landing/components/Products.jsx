import React from "react";
import Weedex1L from "../../../assets/images/weedex-1l-gallon.png";
import Weedex5L from "../../../assets/images/weedex-5l-gallon.png";
import WeedexPouch from "../../../assets/images/weedex-standup-pouch.png";
import DuakekePouch from "../../../assets/images/duakeke-organic-fertiliser-pouch.png";
import DuakekeSack from "../../../assets/images/duakeke-organic-fertiliser-sack.png";
import ProductsCard from "../../../components/ProductsCard";
import Button from "../../../components/Button";
import SectionHeading from "../../../components/SectionHeading";

const Products = () => {
  return (
    <section className="pt-[120px]">
      <SectionHeading heading={"Products"} subHeading={"Lorem ipsum dolor"} />
      <article className=" flex flex-col md:items-center">
        {/* Heading */}

        <div className="px-4">
          {/* Info */}
          {/* <aside className="">
            <div>
              <div className="mb-4">
                <h2 className="md:text-[45px] text-3xl md:leading-14 leading-[36px] font-bold">
                  We Provide High Quality Agricultural Products.
                </h2>
              </div>
              <p className="md:text-base md:leading-6 tracking-[0.16px] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ex igula, pulvinar ultrices justo sed, bibendum
                lobortis nibh. Pellentesque mattis eros sit amet lorem tristique
                faucibus.
              </p>
              <Button type="button" action="View All Products" />
            </div>
          </aside> */}
        </div>

        {/* Products */}
        <div className="px-4 ">
          <div className="flex gap-7 md:flex-row flex-col">
            <ProductsCard
              image={Weedex1L}
              width={601}
              height={415}
              alt=""
              figCaption="Weedex Weedicide"
              size="1 Litre Gallon"
            />
            <ProductsCard
              image={Weedex5L}
              width={601}
              height={415}
              alt=""
              figCaption="Weedex Weedicide"
              size="5 Litre Gallon"
            />
            <ProductsCard
              image={WeedexPouch}
              width={601}
              height={415}
              alt=""
              figCaption="Weedex Weedicide"
              size="Stand Up Pouch (5kg)"
            />
            <ProductsCard
              image={DuakekePouch}
              alt=""
              width={557}
              height={448}
              figCaption="Duakeke Fertilizer"
              size="Stand Up Pouch (5kg)"
            />
            <ProductsCard
              image={DuakekeSack}
              alt=""
              figCaption="Duakeke Fertilizer"
              size={"Sack (25kg)"}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Products;
