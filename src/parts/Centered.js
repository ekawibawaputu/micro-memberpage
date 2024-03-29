import React from "react";

export default function Centered({ children }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="text-lg text-gray-600 mt-4 mb-8 lg:w-8/12 xl:w-6/12 mx-auto text-center">
        {children}
      </div>
    </section>
  );
}
