import productive from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";

const Productive = () => {
  return (
    // <article className="bg-dark-blue-main lg:pt-32  ">

    // </article>
    <section className="md:flex grid place-items-center bg-dark-blue-main pt-32 lg:items-center  lg:justify-between px-10  lg:px-28">
      <img className="w-full md:w-1/2  mb-4" src={productive} />
      <div className="flex flex-col md:ml-10 lg:ml-16 2xl:ml-20">
        <h1 className="font-raleway text-xl font-bold lg:text-3xl md:w-4/5 lg:w-full  xl:w-1/2 ">
          Stay productive, wherever you are
        </h1>
        <p className="w-4/5 my-3 xl:w-[70%]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="w-4/5 lg:w-full xl:w-3/4 mb-3">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <p className="text-cyan flex gap-1 border-b border-cyan w-[38%] md:w-[45%] lg:w-[50%] xl:w-1/4  pb-1">
          See how Fylo works{" "}
          <img className="h-full transform translate-y-1" src={arrow} />
        </p>
      </div>
    </section>
  );
};

export default Productive;
