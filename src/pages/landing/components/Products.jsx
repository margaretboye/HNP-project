import React from "react";
import Underline from "../../../assets/images/underline.webp";
import Weedex1L from "../../../assets/images/weedex-1l-gallon.jpg";
import Weedex5L from "../../../assets/images/weedex-5l-gallon.jpg";
import WeedexPouch from "../../../assets/images/weedex-standup-pouch.jpg";
import DuakekePouch from "../../../assets/images/duakeke-organic-fertiliser-pouch.jpg";
import DuakekeSack from "../../../assets/images/duakeke-organic-fertiliser-sack.jpg";

const Products = () => {
  return (
    <section className="py-[120px]">
      <div>
        <h2 className="text-[45px] font-bold mb-1 text-heading text-center">
          Products
        </h2>
        <div className="">
          <img src={Underline} alt="" className="underline-img" />
        </div>
      </div>
      <div className="mx-8">
        <div className="flex gap-4 ">
          <div className="border-[1.5] rounded-[20px]">
            <div>
              <img src={Weedex1L} />
              <figcaption>
                Weedex Organic Weedicide <br />1 Litre Gallon
              </figcaption>
            </div>
          </div>
          <div className="">
            <img src={WeedexPouch} alt="" />
            <figcaption>
              Weedex Organic Weedicide
              <br />
              Stand up Pouch
            </figcaption>
          </div>
          <div className="">
            <img src={Weedex5L} alt="" />
            <figcaption>
              Weedex Organic Weedicide <br />5 Litre Gallon
            </figcaption>
          </div>
          <div className="">
            <img src={DuakekePouch} alt="" />
            <figcaption>
              Duakeke Organic Fertilizer <br />
              Stand Up Pouch (5kg)
            </figcaption>
          </div>
          <div className="">
            <img src={DuakekeSack} alt="" />
            <figcaption>
              Duakeke Organic Fertilizer <br />
              Sack (25kg)
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
