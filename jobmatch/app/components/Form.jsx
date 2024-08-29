"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section>
      <div className=" absolute mb-5 bottom-0 w-full max-w-[900px] px-5 mx-50">
        <div className="flex items-center justify-between gap-4 bg-[#f0f4f9] px-3 py-2.5 rounded-full">
          <input
            type="text"
            placeholder="Enter a prompt"
            className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-lg text-slate-900 dark:text-slate-900"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="flex items-center gap-4">
            <button className="text-white bg-white-100 rounded-full py-2">
              <Image src="/file.png" alt="file upload" width={25} height={25} />
            </button>
            <button className="text-white bg-gray-100 rounded-full px-2 ">
              <Image src="/send.svg" alt="send" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
