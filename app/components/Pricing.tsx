import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Critic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 199.99,
      isMostPop: true,
      features: [
        "Ability to write and publish movie reviews.",
        "Profile customization options (e.g., profile picture, bio).",
        "Priority support from site administrators.",
        "Unlimited access to read published movie reviews.",
        "Access to curated lists of top-rated movies and recommended picks.",
        "Ability to filter and search reviews based on various criteria (e.g., genre, rating).",
      ],
    },
    {
      name: "Viewer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 49.99,
      isMostPop: false,
      features: [
        "Unlimited access to read published movie reviews.",
        "Access to curated lists of top-rated movies and recommended picks.",
        "Ability to filter and search reviews based on various criteria (e.g., genre, rating).",
      ],
    },
  ];

  return (
    <section className="relative py-14 bg-gray-900">
      <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
        <div className="max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">flux Membership</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Unbiased Isn't Free
          </p>
          <div className="max-w-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur consequat nunc.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center sm:flex">
          {plans.map((item, idx) => (
            <PricingItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingItem = ({ name, desc, price, isMostPop, features }) => (
  <div
    className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 sm:rounded-xl sm:max-w-md ${
      isMostPop
        ? "bg-gray-900 border-cyan-400 border-x-0 sm:border-x-2"
        : "border-transparent"
    }`}
  >
    <div className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8">
      <span className="text-gray-200 font-medium">{name}</span>
      <div className="text-cyan-400 text-3xl font-semibold">
        ${price} <span className="text-xl font-normal">/year</span>
      </div>
      <p className="text-gray-400">{desc}</p>
      <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700">
        Get Started
      </button>
    </div>
    <ul className="p-4 py-8 space-y-3 md:p-8">
      {features.map((featureItem, idx) => (
        <li key={idx} className="flex items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isMostPop ? "text-cyan-600" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          {featureItem}
        </li>
      ))}
    </ul>
  </div>
);

export default Pricing;
