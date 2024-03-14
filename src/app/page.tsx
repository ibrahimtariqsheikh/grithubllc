"use client";
import HeadingOne from "@/components/self/heading-one";
import TextOne from "@/components/self/text-one";
import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/lib/features/count/countSlice";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { Minus, Plus } from "lucide-react";

export default function Home() {
  const count = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();
  return (
    <main className="flex flex-col gap-10 min-h-screen mx-10">
      <section className="bg-blue-500 h-64 flex justify-center items-center flex-col gap-4 rounded-xl">
        <HeadingOne className="text-white">Welcome to Grithub LLC</HeadingOne>
        <TextOne className="text-white">Lets Begin Coding</TextOne>
        <div className="flex gap-4 items-center">
          <Button size={"icon"} onClick={() => dispatch(decrement())}>
            <Minus className="w-4 h-4" />
          </Button>
          <span className="text-white">{count}</span>
          <Button size={"icon"} onClick={() => dispatch(increment())}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-yellow-400 h-64 rounded-xl" />
        <div className="bg-yellow-400 h-64 rounded-xl" />
        <div className="bg-yellow-400 h-64 rounded-xl" />
      </section>
      <section className="bg-blue-500 h-64 flex justify-center items-center flex-col gap-4 rounded-xl">
        <HeadingOne className="text-white">Currently In Production</HeadingOne>
        <TextOne className="text-white">Building Soon...</TextOne>
      </section>
    </main>
  );
}
