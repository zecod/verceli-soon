export const Intro = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-2 absolute bg-black overflow-hidden">
      <div className="size-10 svg-animation">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <h2 className="font-extrabold leading-tight tracking-[-0.015em] text-6xl text-animation jersey-10-regular">
        {"Verceli".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h2>
    </div>
  );
};
