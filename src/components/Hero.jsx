import access from "../images/icon-access-anywhere.svg";
import anyFile from "../images/icon-any-file.svg";
import collaboration from "../images/icon-collaboration.svg";
import security from "../images/icon-security.svg";

const Benefit = ({ img, header, text }) => {
  return (
    <div className=" text-center flex flex-col justify-center items-center mt-16 md:mt-8">
      <img className="w-[10%] " src={img} />
      <h3 className="font-raleway font-bold text-base md:text-lg mt-6 md:mt-4 mb-2">
        {header}{" "}
      </h3>
      <p className="w-2/3 md:w-1/2 text-center">{text} </p>
    </div>
  );
};

const Hero = () => {
  return (
    <main className="bg-dark-blue-main pt-10">
      <article className="grid place-items-center md:grid-cols-2">
        <Benefit
          img={access}
          header="Access your files,anywhere"
          text="The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere."
        />
        <Benefit
          img={security}
          header="Security you can trust"
          text="2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files."
        />
        <Benefit
          img={collaboration}
          header="Real-time collaboration"
          text="
  Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
        />
        <Benefit
          img={anyFile}
          header="Store any type of file"
          text="Whether youre sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared."
        />
      </article>
    </main>
  );
};

export default Hero;
