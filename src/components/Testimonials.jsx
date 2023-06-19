import satish from "../images/profile-1.jpg";
import bruce from "../images/profile-2.jpg";
import iva from "../images/profile-3.jpg";
import quotes from "../images/bg-quotes.png";
import EarlyAccess from "./EarlyAccess";

const Testimonial = ({ author, position, img }) => {
  return (
    <div className="bg-dark-blue-testimonials px-6 lg:w-full xl:w-[85%] py-6 md:py-10 rounded-md z-10">
      <h4 className="w-11/12   xl:w-3/4 ">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </h4>
      <div className="flex mt-6">
        <img
          className="rounded-full flex lg:w-[20%] xl:w-[13%]  w-[13%]"
          src={img}
        />
        <div className="flex flex-col ml-2">
          <h5 className="mb-2 font-bold">{author}</h5>
          <p className="text-xs">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <section className="bg-dark-blue-main pt-28 grid place-items-center   lg:grid-cols-3 gap-6 xl:gap-4 px-10 xl:px-20   lg:pb-40 relative">
        <Testimonial
          img={satish}
          author="Satish Patel"
          position="Founder & Ceo, Huddle"
        />
        <Testimonial
          img={bruce}
          author="Bruce McKenzie"
          position="Founder & Ceo, Huddle"
        />
        <Testimonial
          img={iva}
          author="Iva Boyd"
          position="Founder & Ceo, Huddle"
        />
        <div>
          <img
            className="absolute top-20 left-12 lg:left-10 xl:left-28 "
            src={quotes}
          />
        </div>
      </section>
      <EarlyAccess />
    </>
  );
};

export default Testimonials;
