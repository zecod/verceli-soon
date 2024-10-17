import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="flex items-center w-full justify-between gap-2 py-5">
      <div className="flex items-center gap-2">
        <div className="size-6  p-0 ">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="jersey-10-regular   font-regular leading-tight tracking-[0px]  text-3xl">
          Verceli
        </h2>
      </div>

      <Button className="rounded-full hidden md:flex">Coming soon...</Button>
    </div>
  );
};

export default NavBar;
