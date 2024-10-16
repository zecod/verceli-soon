const NavBar = () => {
  return (
    <div className=" flex items-center gap-2 py-5">
      <div className="size-6  p-0 ">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="text-xl font-semibold tracking-wide">Verceli</div>
    </div>
  );
};

export default NavBar;
