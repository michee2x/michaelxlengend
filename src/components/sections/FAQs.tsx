import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQs = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const FAQS = [
    {
      question: "How can i make money online?",
      answer: "By creating and selling digital products",
    },
    {
      question: "What do i need to start with?",
      answer: "Your smart phone is literally is starting point",
    },
    {
      question: "How can i reach you?",
      answer: "Via email to michaelisraelmike@gmail.com",
    },
  ];
  return (
    <div className="bg-gray-100 py-24 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Here are some Frequently asked questions over the decade
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="mx-auto flex max-w-screen-sm flex-col border-t">
          {/* <!-- question - start --> */}
          {FAQS.map((e, idx) => {
            return (
              <div key={idx} className="border-b">
                <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                  <span className="font-semibold transition duration-100 md:text-lg">
                    {e.question}
                  </span>

                  <span
                    onClick={() =>
                      clicked === idx ? setClicked(null) : setClicked(idx)
                    }
                    className="text-indigo-500 text-xl"
                  >
                    {clicked !== null && clicked === idx ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </div>

                <p
                  className={`mb-4 ${
                    clicked !== null && clicked === idx ? "block" : "hidden"
                  } text-gray-500`}
                >
                  {e.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
