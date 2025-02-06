import React from "react";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const product = ProductDetails(); 

  const divs = "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0";
  const dts = "text-sm font-medium leading-6 text-white-900";
  const dds = "mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0";

  const productFields = [
    { label: "Product Name", value: product.name },
    { label: "Details", value: product.details },
    { label: "Price", value: `${product.price}$` },
  ];

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-white-900">
          Products List
        </h3>
      </div>
      <div className="mt-6 border-t border-white-100">
        <dl className="divide-y divide-white-100">
          {productFields.map((field, index) => (
            <div key={index} className={divs}>
              <dt className={dts}>{field.label}</dt>
              <dd className={dds}>{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Product;
