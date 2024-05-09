'use client'
import Image from "next/image";
import Navvy from "./components/Navvy";
import Pricing from "./components/Pricing";
import Card from "./components/Card";
import Foot from "./components/Foot";
import BetterWay from "./components/BetterWay";

export default function Home() {
  return (
    <>
      <Navvy />
      {/* <BetterWay /> */}
      <Card />
      {/* <Pricing /> */}
      <Foot />
    </>
  );
}
