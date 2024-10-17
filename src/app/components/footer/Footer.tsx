export const Footer: React.FC = () => {
  return (
    <div className="p-8 flex  items-center justify-center border">
      <div className="space-y-2 ">
        <div className="flex items-center justify-center gap-3">
          <div
            className="flex items-center gap-1 curosr-pointer"
            onClick={() => window.location.assign("/")}
          >
            <div className="size-6">
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
            <h2 className="font-extrabold leading-tight tracking-[-0.015em] jersey-10-regular text-3xl">
              Verceli
            </h2>
          </div>
        </div>
        <div className="text-sm text-muted-foreground opacity-70">
          © 2024 Verceli. All rights reserved.
        </div>
      </div>
    </div>
  );
};
