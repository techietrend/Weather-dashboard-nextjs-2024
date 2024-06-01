"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { sunset } from "@/app/utils/Icons";
import { unixToTime } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import moment from "moment";
import React from "react";

function Sunset() {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.sys || !forecast?.sys?.sunset) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const times = forecast?.sys?.sunset;
  const timezone = forecast?.timezone;

  const sunsetTime = unixToTime(times, timezone);
  const sunrise = unixToTime(forecast?.sys?.sunrise, timezone);

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey dark:shadow-slate-800	shadow-2xl ">
      <div>
        <h2 className="flex items-center gap-2 font-medium text-lg ">
          {sunset}Sunrise
        </h2>
        <p className="pt-4 text-2xl">{sunrise}</p>
        <h2 className="flex items-center gap-2 font-medium pt-2">
          {sunset}Sunset
        </h2>
        <p className="pt-4 text-2xl">{sunsetTime}</p>
      </div>
    </div>
  );
}

export default Sunset;