'use client'

import Foot from "@/app/components/Foot";
import Navvy from "@/app/components/Navvy";

export default function Home() {
  return (
    <>
      <Navvy />                <div className="mx-auto px-4md:px-8">
        <div className="space-y-2 sm:max-w-md sm:mx-auto sm:text-center">
          <p>review go here</p>
        </div>



      </div>
      {/* <Pricing /> */}
      <Foot />
    </>
  );
}
