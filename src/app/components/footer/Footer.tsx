import { Separator } from "@/components/ui/separator";

export const Footer: React.FC = () => {
  return (
    <div className="py-5 flex flex-col-reverse md:flex-row gap-5 items-center justify-between mt-20 ">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
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
          <Separator orientation="vertical" className="h-7" />
          <div className="flex gap-2 items-center">
            <div className="size-3 bg-green-500 rounded-full"></div>
            <span className="text-muted-foreground text-sm">
              All systems operational
            </span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground opacity-70">
          © 2024 Verceli. All rights reserved.
        </div>
      </div>
    </div>
  );
};
