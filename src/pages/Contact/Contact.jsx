import React from "react";

const Contact = () => {
  return (
    <div className="pt-6 lg:pt-24 mb-6">
      <div className="hero min-h-screen ">
        <div className="card shrink-0 md:w-2/3 lg:w-1/2  shadow-2xl bg-base-100">
          <h2 className="text-center pt-4 text-2xl font-bold text-red-800 uppercase font-serif">Send Us a Message</h2>
          <form className="card-body ">
            <div className="flex gap-3">
              <div className="form-control w-1/2">
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
              <div className="form-control w-1/2">
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
              <button className="btn btn-neutral bg-red-900  text-white font-bold">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
