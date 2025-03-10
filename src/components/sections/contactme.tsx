import React from "react";

const ContactME = () => {
  return (
    <div className="bg-slate-900 teko my-10 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 teko text-center text-4xl font-bold text-blue-700 md:mb-6 lg:text-3xl">
            Get in touch
          </h2>

          <p className="mx-auto max-w-screen-md teko text-2xl text-center text-gray-200 md:text-lg">
            Pls fill the contact form if you have any questions. Expect feedback
            within 24hrs. Thanks.
          </p>
        </div>
        {/* <!-- text - end --> */}

        {/* <!-- form - start --> */}
        <form className="mx-auto grid tracking-wider max-w-screen-md gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="mb-2 inline-block text-xl teko text-gray-200 sm:text-base"
            >
              Name*
            </label>
            <input
              name="first-name"
              placeholder="name pls"
              className="w-full rounded text-xl border bg-gray-50 px-3 py-2 teko text-gray-900 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-xl teko text-gray-200 sm:text-base"
            >
              Email*
            </label>
            <input
              name="email"
              placeholder="your email"
              className="w-full rounded border text-xl bg-gray-50 px-3 py-2 teko text-gray-900 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="mb-2 inline-block text-xl teko text-gray-200 sm:text-base"
            >
              Phone*
            </label>
            <input
              name="subject"
              type="number"
              className="w-full rounded border text-xl bg-gray-50 px-3 py-2 teko text-gray-900 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 teko text-xl inline-block teko text-gray-200 sm:text-base"
            >
              Message*
            </label>
            <textarea
              name="message"
              className="h-64 w-full text-xl rounded border bg-gray-50 px-3 py-2 teko text-gray-900 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button className=" shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] ease-linear rounded-lg bg-indigo-500 px-8 py-3 text-center font-semibold text-white outline-none ring-indigo-300 transition duration-100 text-xl hover:bg-indigo-600 focus-visible:ring teko active:bg-indigo-700 md:text-base">
              Send
            </button>

            <span className="text-sm text-gray-500">*Required</span>
          </div>
        </form>
        {/* <!-- form - end --> */}
      </div>
    </div>
  );
};

export default ContactME;
