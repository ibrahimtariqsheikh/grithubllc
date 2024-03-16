import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 min-h-screen ">
      <section className="grid lg:grid-cols-3 mt-10 mx-10 lg:mx-20">
        <div className="grid gap-6 p-10 col-span-1">
          <h1 className="text-6xl font-bold leading-tight">
            Shop your daily utensiles
          </h1>
          <p className="text-primary/80 leading-tight text-sm font-sans">
            We are a personal brand for all your shopping needs and want to give
            the best top notch quality to our customers so but now.
          </p>
          <div className="flex gap-4 ">
            <Button variant={"default"} className="font-sans rounded-xl">
              Explore Shop
            </Button>
            <Button variant={"outline"} className="font-sans rounded-xl">
              About Us
            </Button>
          </div>
        </div>

        <div className="hidden lg:block p-10 col-span-2">
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-neutral-100 w-full h rounded-2xl"></div>
            <div className="bg-neutral-100 w-full h-72 rounded-2xl"></div>
            <div className="bg-neutral-100 w-full h-72 rounded-2xl"></div>
          </div>
        </div>
      </section>
      <section className="mx-10 lg:mx-20 p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold leading-tight">New Arrivals</h1>
          <span className="font-sans hidden lg:block">See All</span>
        </div>
        <div className="grid lg:grid-cols-4 mt-10 gap-10">
          <div className="bg-neutral-100 w-full h-60 rounded-2xl" />
          <div className="bg-neutral-100 w-full h-60 rounded-2xl" />
          <div className="bg-neutral-100 w-full h-60 rounded-2xl" />
          <div className="bg-neutral-100 w-full h-60 rounded-2xl" />
        </div>
      </section>
    </main>
  );
}
