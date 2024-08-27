import GradualSpacing from "@/components/magicui/gradual-spacing";
import HyperText from "@/components/magicui/hyper-text";
import GridPattern from "@/components/magicui/grid-pattern";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import "../App.css";

const App = () => {
  return (
    <main className="w-screen h-screen bg-black text-white relative">
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <div className="container w-full h-full flex flex-col items-center justify-center">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em]  md:text-7xl md:leading-[5rem] text-wrap"
          text="Stay Tuned for What's Next!"
        />

        <BlurFade delay={0.25 * 2} inView>
          <HyperText
            className="text-xl font-bold text-muted-foreground "
            text="Coming soon..."
          />
        </BlurFade>
      </div>
    </main>
  );
};

export default App;
