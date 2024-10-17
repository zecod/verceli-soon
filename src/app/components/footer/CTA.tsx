import { Plus } from "lucide-react";

export const CTA = () => {
  return (
    <div className="relative h-[400px] border text-[42px] leading-[49px] tracking-[-1.3px]  text-center flex items-center justify-center">
      <Plus className="absolute -top-3 -left-3 text-zinc-600" />
      <Plus className="absolute -bottom-3 -right-3 text-zinc-600 " />
      Stay connected for updates and sneak peeks.
    </div>
  );
};
