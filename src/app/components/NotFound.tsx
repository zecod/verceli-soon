import { Separator } from "@/components/ui/separator";

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-black text-white flex justify-center items-center gap-5 px-2">
      <h2 className="text-4xl font-extrabold">404</h2>
      <Separator orientation="vertical" className="h-10 bg-zinc-700" />
      <p className="text-sm">The page you're looking for does not exist.</p>
    </div>
  );
};

export { NotFound };
