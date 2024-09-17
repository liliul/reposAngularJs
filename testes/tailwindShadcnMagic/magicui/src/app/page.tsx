import BlurIn from '@/components/magicui/blur-in'

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <BlurIn 
        word="Hello Magic UI"
        className="text-foreground text-4xl font-bold"
      />
    </div>
  );
}
