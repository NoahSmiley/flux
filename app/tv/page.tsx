'use client'

import Card from "../components/Card";
import Foot from "../components/Foot";
import Navvy from "../components/Navvy";

export default function Home() {
  return (
    <>
      <Navvy />
      <div className="mx-auto px-4md:px-8">
        <div className="space-y-2 sm:max-w-md sm:mx-auto sm:text-center">
          <p>TV shows go here</p>
        </div>



      </div>
      <Foot />
    </>
  );
}
