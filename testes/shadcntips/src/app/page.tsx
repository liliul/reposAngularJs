import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen flex justify-center items-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Login</CardTitle>

            <CardDescription>Enter your email below to login to your accont</CardDescription>
          </CardHeader>
        </Card>
      </main>
    </>
  );
}
