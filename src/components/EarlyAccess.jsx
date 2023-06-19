import { useState } from "react";
import { Button } from "./Intro";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  // check if the email is valid
  const handleClick = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setTimeout(() => {
        setError(null);
      }, 1500);
    } else {
      alert(
        "Finally i was able to finish this, i spent so much time on this :( i don't have a life"
      );
    }
  };

  return (
    <article className="bg-dark-blue-main">
      <section className="bg-dark-blue-intro text-center z-20 py-12 w-[85%]  px-10 xl:w-1/2 mx-auto transform translate-y-24 rounded-md">
        <h2 className="lg:text-2xl text-xl font-bold mb-4 font-raleway">
          Get early access today
        </h2>
        <p className="w-full xl:w-[90%]  transform 2xl:translate-x-12">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form
          onSubmit={handleClick}
          className="xl:flex relative xl:justify-between grid xl:items-center  w-full mt-6 gap-4"
        >
          <input
            className={`p-4 w-full lg:w-3/4 rounded-full text-black mx-auto   ${
              error ? "text-light-red border-light-red border" : ""
            }`}
            value={email}
            type="email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="transform -translate-y-3 w-full mx-auto lg:w-[50%]">
            <Button onClick={handleClick} text="Get Started Free" />
          </div>
          <div className="absolute top-12 left-8 lg:top-16 mt-3">
            {error && <p className="text-light-red">{error}</p>}
          </div>
        </form>
      </section>
    </article>
  );
};

export default EarlyAccess;
