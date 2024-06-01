"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { people } from "@/app/utils/Icons";
import { formatNumber } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Population() {
  const { fiveDayForecast } = useGlobalContext();
  const { city } = fiveDayForecast;

  if (!fiveDayForecast || !city) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col justify-between dark:bg-dark-grey dark:shadow-slate-800	shadow-2xl ">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium text-lg md:text-xl">
          {people} <span>Population</span>
        </h2>
        <p className="pt-4 text-3xl md:text-4xl font-bold">
          {formatNumber(city.population)}
        </p>
      </div>
      <p className="text-sm md:text-base">
        Latest UN population data for {city.name}.
      </p>
    </div>
  );
}

export default Population;