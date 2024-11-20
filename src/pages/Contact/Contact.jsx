import React from "react";

const Contact = () => {
  return (
    <section className="pt-6 lg:pt-1 mb-6">
      <div className="hero md:min-h-screen container mx-auto">
        <div className="card shrink-0 w-full mx-4 md:w-2/3 lg:w-1/2  shadow-2xl bg-base-100">
          <h2 className="text-center text-2xl font-bold text-red-800 uppercase font-serif">
            Send Us a Message
          </h2>
          <form className="card-body dark:bg-black">
            <div className="md:flex gap-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered  border-indigo-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered  border-indigo-300 focus:outline-none focus:ring"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="input input-bordered  border-indigo-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message*</span>
              </label>
              <textarea
                name="message"
                rows={3}
                className="textarea textarea-bordered  border-indigo-300 focus:outline-none focus:ring"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button className=" border-red-500 border font-extrabold px-3 py-2 shadow-lg shadow-red-900  hover:shadow-inner hover:shadow-red-800">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
