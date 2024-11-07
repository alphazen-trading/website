import { BookOpen, Download, Github } from "lucide-react";
import { Button } from "./ui/button";

const BackgroundPattern = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none [z-index:-1] absolute inset-0 h-full w-full fill-blue-500/50 stroke-blue-500/50 [mask-image:linear-gradient(to_top,_#ffffffad,_transparent)] opacity-[.30]"
  >
    <defs>
      <pattern
        id=":r6:"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
        x="-1"
        y="-1"
      >
        <path d="M.5 20V.5H20" fill="none" strokeDasharray="0"></path>
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r6:)"></rect>
  </svg>
);

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-t from-blue-100/20 dark:from-blue-900/5 pt-20 sm:pt-28 pb-[12rem] md:pb-[11.3rem] px-4 sm:px-6">
      <main className="text-center flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full text-primary font-lora text-5xl inline-flex items-center justify-center">
          <span>The Zen way of Trading</span>
        </div>
        <div className="mx-auto max-w-md text-gray-500">
          Alpha Zen is a collection of tools that help traders generate alpha in
          the financial markets.
        </div>

        <div className="mx-auto text-gray-500">
          <a href="https://pypi.org/project/zenbt/" target="_blank">
            <Button className="mr-4 bg-blue-600 shadow-lg dark:text-white hover:bg-blue-500">
              <Download />
              Download now
            </Button>
          </a>
          <a href="https://pypi.org/project/zenbt/" target="_blank">
            <Button
              variant="outline"
              className="mr-4 shadow-sm dark:text-white"
            >
              <Github />
              Clone Source
            </Button>
          </a>
          <a href="https://pypi.org/project/zenbt/" target="_blank">
            <Button
              variant="outline"
              className="mr-4 shadow-sm dark:text-white"
            >
              <BookOpen />
              Docs
            </Button>
          </a>
        </div>

        <BackgroundPattern />
      </main>
    </div>
  );
};

export default Hero;
