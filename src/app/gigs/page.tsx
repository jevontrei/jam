"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isPending, setIsPending] = useState(false);
  const [myGigs, setMyGigs] = useState<string[]>([]);

  function handleSaveClick(gig: string) {
    setIsPending(true);

    const updatedGigs: string[] = [...myGigs, gig];
    try {
      setMyGigs(updatedGigs);
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
    }
  }

  function handleUnsaveClick(gigToDelete: string) {
    setIsPending(true);

    const updatedGigs: string[] = [];

    for (const gig of myGigs) {
      if (gig != gigToDelete) {
        updatedGigs.push(gig);
      }
    }

    try {
      setMyGigs(updatedGigs);
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
    }
  }

  //   const placeholderGigs = new Array(32).fill(1);
  const placeholderGigs = [
    {
      title: "Rumble Pack Website Launch",
      artist: "Rumble Pack",
      datetime: "2026-02-17",
      venue: "CYKAS",
    },
    {
      title: "Next Gen",
      artist: "Meva's Journal",
      datetime: "2026-06-29",
      venue: "Brisbane Jazz Club",
    },
    {
      title: "Liv & Friends",
      artist: "Live at Liv's",
      datetime: "2026-12-23",
      venue: "The Burrow",
    },
    {
      title: "Big Blowout",
      artist: "Menajerie + Sixth of the Sun",
      datetime: "2027-01-17",
      venue: "Mirrorball Ministries",
    },
    {
      title: "Student Jazz Giggo",
      artist: "Dave and the Faves",
      datetime: "2025-06-21",
      venue: "Nosferatu",
    },
    {
      title: "Here We Go",
      artist: "Melody Graves",
      datetime: "2026-04-23",
      venue: "The Burrow",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-300 flex flex-col items-center gap-4">
        <h2 className="text-6xl m-8">Gigs</h2>
        <div className="flex flex-row flex-wrap justify-center">
          {placeholderGigs.map((gig, i) => (
            // TODO use key={id} when i make the db
            <div
              key={i}
              className="m-2 bg-blue-100 h-112 w-64 border border-black rounded-md"
            >
              <div className="m-4">
                <strong>{gig.title}</strong>
              </div>
              <div className="mx-4 my-1">Artist: {gig.artist}</div>
              <div className="mx-4 my-1">{gig.datetime}</div>
              <div className="mx-4 my-1">{gig.venue}</div>
              <div className="m-4 p-4 h-36 border border-black rounded-md bg-white">
                Image
              </div>
              <div className="px-4  flex flex-row items-center">
                Save
                <Button
                  className="m-2 bg-green-100"
                  disabled={isPending}
                  size="sm"
                  onClick={() => handleSaveClick(gig.title)}
                >
                  <Image
                    src="/toggle-right.svg"
                    alt="toggled on icon"
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className=" p-4 border border-black rounded bg-yellow-200">
          <h2 className="text-3xl pb-2">My Saved Gigs</h2>
          <ul>
            {myGigs &&
              myGigs.map((gig, i) => (
                <div
                  key={i}
                  className="my-2 flex flex-row items-center justify-between"
                >
                  <li>{gig}</li>
                  <Button
                    className="ml-4"
                    variant="destructive"
                    onClick={() => handleUnsaveClick(gig)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
