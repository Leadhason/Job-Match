"use client";

import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <main>
      <section className="w-full flex-center flex-col">
        <div>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-6xl text-center">
            Welcome to Job Match
            <br className="max-md:hidden" />
            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Discover Your Dream Job
            </span>
          </h1>
          <p className="mt-5 text-lg text-white-600 sm:text-xl max-w text-center">
            Our AI-powered tool analyzes your skills and experience to find the
            best-suited roles, matching your unique skills to the perfect job
            opportunities.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
