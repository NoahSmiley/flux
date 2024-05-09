import { useEffect, useState } from "react";
import Rating from "react-animated-rating";
import StaticStars from "./StaticStars";

const posts = [
  {
    title: "Whiplash",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
    img: "./Whiplash (2014).jpeg",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
    isGold: true,
  },
  {
    title: "No Country for Old Men",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    img: "./No Country for Old Men (2007).jpeg",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
    isGold: false,
  },
  {
    title: "Inception",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
    img: "./Inception (2010).jpeg",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
    isGold: false,
  },

  {
    title: "Goodfellas",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
    img: "./GoodFellas (1990).jpeg",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
    isGold: true,
  },
  {
    title: "The Fellowship of the Ring",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
    img: "./The Lord of the Rings- The Fellowship of the Ring (2001).png",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
    isGold: true,
  },
  {
    title: "No Country for Old Men",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    img: "./No Country for Old Men (2007).jpeg",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
    isGold: false,
  },
  {
    title: "Inception",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
    img: "./Inception (2010).jpeg",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
    isGold: false,
  },
];

const Card = () => {
  const [clipWidth, setClipWidth] = useState(0);

  useEffect(() => {
    // Calculate clip width based on percentage (0-100)
    const calculatedClipWidth = (50 / 100) * 14; // Assuming 14 is the width of the star SVG
    setClipWidth(calculatedClipWidth);
  });

  return (
    <section className="py-10" style={{ marginTop: "100px" }}>
      <div className="relative">
        {/* Background below */}
        <div
          className="absolute inset-0 z-0 blur-[118px] h-[800px] mx-auto sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
        <div className="relative z-10 max-w-screen-xl mx-auto text-gray-300 sm:px-4">
          <div className="max-w-xl">
            <h3
              style={{ color: "white" }}
              className=" text-3xl font-semibold sm:text-4xl"
            >
              Recent Movie Reviews
            </h3>
            <p className="text-gray-300 mt-3">
              A collection of the bois most recent reviews.
            </p>
          </div>
        </div>
        <div className="relative z-10 text-gray-300 sm:px-4">
          <ul
            className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-7 px-20"
            style={{ paddingLeft: "400px", paddingRight: "400px" }}
          >
            {posts.map((items, key) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                <a href={items.href}>
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-3 space-y-2">
                    <h3 className="text-lg text-gray-200 duration-150 group-hover:text-white-100 font-semibold">
                      {items.title}
                    </h3>
                    {items.isGold ? (
                      <div>
                        <div
                          className="flex items-center text-gray-400 text-sm gap-6"
                          style={{ position: "relative" }}
                        >
                          <StaticStars percentage={78} />
                        </div>
                        <p
                          className="text-gray-400 text-sm duration-150 group-hover:text-gray-200"
                          style={{ marginTop: "2rem" }}
                        >
                          {items.desc}
                        </p>
                      </div>
                    ) : (
                      <Rating />
                    )}
                    <p className="text-gray-400 text-sm duration-150 group-hover:text-gray-200">
                      {items.desc}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Card;
