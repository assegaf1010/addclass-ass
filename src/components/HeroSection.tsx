import Image from "next/image";
import Button, { ButtonBorder } from "./elements/Button";

export default function HeroSection() {
  return (
    <section className=" text-gray-800 md:min-h-screen pt-20">
      <div className="container flex flex-col justify-center py-4 md:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center py-4 md:p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left ">
          <div className="space-y-6">
            <h1 className="text-5xl font-medium leading-none sm:text-5xl ">
              {"Hi i'm "}
              <span className="text-[var(--primary-color)] font-extrabold">
                Muhammad Assegaf
              </span>
            </h1>
            <h2 className="text-5xl  font-bold leading-none sm:text-4xl  text-[var(--secondary-color)]">
              Web Developer
            </h2>
            <p className="!mt-3 mb-8 text-xl sm:mb-12  font-medium md:max-w-2xl">
              Welcome to my digital space! Im a passionate web developer
              dedicated to creating dynamic, user-friendly, and visually
              stunning websites. Whether youre a startup, small business, or
              individual looking for an online presence, Im here to bring your
              vision to life.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-10 lg:justify-start">
              <Button link="/">Hire Me</Button>
              <ButtonBorder link="/">{`Let's talk`}</ButtonBorder>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-4 md:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            width={"500"}
            height={"500"}
            src="/profile/profile.jpg"
            alt=""
            className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128    w-72 sm:w-80 lg:w-96 xl:w-112 2xl:w-128 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
