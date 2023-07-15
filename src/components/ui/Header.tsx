import { headerLinks } from "@/utils/constants";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../button/Button";

export default function Header() {
  const [state, setState] = useState(false);

  return (
    <div className="bg-base-100/75 backdrop-blur sticky !px-0 top-0 py-2 z-[100] shadow-[0_5px_200px_-30px_hsl(var(--p))]">
      <nav className="w-full md:static md:text-sm md:border-none ">
        <div className="items-center mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-5 md:block px-10">
            <Link className="flex items-center gap-4" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/logos/transparent/gwologo.png"
                className="max-w-[3em]"
				width={50}
				height={50}
                alt="gwo logo"
              />
              <h1 className="hidden text-xl md:block font-semibold tracking-widest uppercase">
                Generational Writers
              </h1>
            </Link>
            <div className="md:hidden">
              <button className="text-primary" onClick={() => setState(!state)}>
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <FontAwesomeIcon size="lg" icon={faBars} />
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-6 pr-6 md:flex md:space-x-6 md:space-y-0">
              {headerLinks.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-300 h5 hover:text-primary-600"
                  >
                    <Link href={item.href} className="block">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                  <Button children={<>Join Us</>} type={""}></Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
