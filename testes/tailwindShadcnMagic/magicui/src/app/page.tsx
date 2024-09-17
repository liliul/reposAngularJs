import BlurIn from '@/components/magicui/blur-in'
import Meteors from '@/components/magicui/meteors';

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <BlurIn 
        word="Hello Magic UI"
        className="text-foreground text-4xl font-bold"
      />

      <br />

      <MeteorDemo />
    </div>
  );
}


export function MeteorDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span>
    </div>
  );
}