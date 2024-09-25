'use client'

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import Image from "next/image";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export default function Home() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  function onSubmmit(data: z.infer<typeof schema>) {
    console.log(data)
  }

  return (
    <>
      <main className="relative w-full h-screen flex justify-center items-center">
        <ModeToggle />

        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <CardDescription>Enter your email below to login to your accont</CardDescription>
          </CardHeader>
          <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmmit)}> 
                    <div className="flex flex-col gap-3">
                      <FormField 
                        control={form.control}
                        name="email"
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Digitar email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField 
                        control={form.control}
                        name="password"
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Sua senha" {...field} 
                                type="password"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Link href="/" className="ml-auto inline-block text-sm underline text-muted-foreground">
                        Forget your password?
                      </Link>

                      <Button type="submit" className="w-full">
                        Login
                      </Button>
                      <Button variant="outline" type="button" className="w-full">
                        Login with Google
                      </Button>
                    </div>
                  </form>
                </Form>

                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Don&apos;t have an account?{' '}
                  <Link href="/" className="outline">Sign up</Link>
                </p>
              </CardContent>
        </Card>
      </main>
    </>
  );
}
