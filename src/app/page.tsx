import AccordionSection from "@/components/AccordionSection";
import HomeCard from "@/components/HomeCard";
import HomeSignIn from "@/components/HomeSignIn";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen home py-10 text-white px-7">
        <nav>
          <Link href={"/"} className="font-black text-red-600 text-lg">
            NETFLIX
          </Link>
        </nav>
        <h1 className="mt-20 font-bold text-4xl md:text-5xl lg:text-[4em] lg:max-w-5xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <h3 className="font-semibold text-lg mt-4">
          Plans now start at USD3.99/month.
        </h3>
        <h3 className="font-semibold text-lg mt-4">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div>
          <HomeSignIn />
        </div>
      </section>
      <section className="h-fit  px-4 grid gap-4 -translate-y-32 sm:grid-cols-2 md:grid-cols-4 md:translate-y-0 ">
        <HomeCard
          icon={
            <Image
              width={100}
              height={100}
              src="/tv.svg"
              alt="Enjoy on your TV."
            ></Image>
          }
          title="Enjoy on your TV."
          description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        />
        <HomeCard
          icon={
            <Image
              width={100}
              height={100}
              src="/popcorn.svg"
              alt="Enjoy on your TV."
            ></Image>
          }
          title="Watch everywhere."
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        />
        <HomeCard
          icon={
            <Image
              width={100}
              height={100}
              src="/crystalball.svg"
              alt="Create profiles for kids."
            ></Image>
          }
          title="Create profiles for kids."
          description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        />
        <HomeCard
          icon={
            <Image
              width={100}
              height={100}
              src="/download.svg"
              alt="Enjoy on your TV."
            />
          }
          title="Download your shows to watch offline."
          description="Save your favorites easily and always have something to watch."
        />
      </section>
      <section className="relative min-h-screen py-5 px-16 lg:px-16">
        <h1 className="text-4xl text-white font-bold mb-10">
          Frequently Asked Questions
        </h1>
        <AccordionSection />
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <HomeSignIn />
      </section>
    </main>
  );
}
