import { useState } from "react";
import WordRotate from "@/components/ui/word-rotate";

type Countries = {
  name: string;
  code: string;
  color?: string;
};

const countryData: Countries[] = [
  {
    name: "English.",
    code: "US",
    color: "#002868",
  },
  {
    name: "Chinese.",
    code: "CN",
    color: "#FF0000",
  },
  {
    name: "Hindi.",
    code: "IN",
    color: "#FF9933",
  },
  {
    name: "Spanish.",
    code: "ES",
    color: "#AA151B",
  },
  {
    name: "French",
    code: "FR",
    color: "#002395",
  },
];

const countryDataV2: Countries[] = [
  {
    name: "Arabic.",
    code: "SA",
    color: "#006C35",
  },
  {
    name: "Portuguese.",
    code: "PT",
    color: "#009739",
  },
  {
    name: "Urdu.",
    code: "PK",
    color: "#11457E",
  },
  {
    name: "Russian.",
    code: "RU",
    color: "#0033A0",
  },
  {
    name: "Bengali.",
    code: "BD",
    color: "#006A4E",
  },
];

export const Languages = () => {
  const [name, setName] = useState<string>("language");
  const [color, setColor] = useState<string>("");

  const handleLanguageName = (e: any) => {
    setName(e.currentTarget.dataset.name);
    setColor(e.currentTarget.dataset.color);
  };

  return (
    <div>
      <div className="flex items-stretch h-auto flex-wrap">
        <div className="p-8 py-10 border-x border-b lg:max-w-[400px] lg:min-w-[400px] w-full flex items-center">
          <div className="text-[32px] leading-[32px] tracking-[-2px] whitespace-nowrap flex items-center gap-2">
            <span className="dark:text-[#EDEDED] text-[#171717]">
              Your voice, your
            </span>{" "}
            <WordRotate
              color={color}
              words={[name]}
              className="whitespace-nowrap"
            />
          </div>
        </div>

        {countryData.map((item) => {
          return (
            <div
              className="p-8 flex flex-col justify-center items-center gap-1 border border-[#1A1A1A] cursor-pointer transition-all duration-200 ease-in hover:bg-gray-100 hover:dark:bg-neutral-900 flex-1 py-10 min-w-[120px] sm:min-w-[150px]"
              key={item.code}
              data-name={item.name}
              data-color={item.color}
              onMouseEnter={handleLanguageName}
            >
              <img
                src={`https://imagerepo.ding.com/flag/${item.code}.png?height=60&mask=circle&compress=none`}
                alt={`${item.code} flag`}
                className="rounded-full size-12"
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-stretch h-auto flex-wrap">
        {countryDataV2.map((item) => {
          return (
            <div
              className="p-8 flex flex-col justify-center items-center gap-1 border border-[#1A1A1A] cursor-pointer transition-all duration-200 ease-in hover:bg-gray-100 hover:dark:bg-neutral-900 flex-1 py-10 min-w-[120px] sm:min-w-[150px]"
              key={item.code}
              data-name={item.name}
              data-color={item.color}
              onMouseEnter={handleLanguageName}
            >
              <img
                src={`https://imagerepo.ding.com/flag/${item.code}.png?height=60&mask=circle&compress=none`}
                alt={`${item.code} flag`}
                className="rounded-full size-12"
              />
            </div>
          );
        })}

        <div className="p-8 py-10 border-x border-b flex items-center justify-end md:w-auto w-full">
          <div className="text-[32px] leading-[32px] tracking-[-2px] dark:text-[#EDEDED] text-[#171717]">
            ...and many more.
          </div>
        </div>
      </div>
    </div>
  );
};
