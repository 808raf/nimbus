"use client";

import Header from "@/components/header";
import Search from "@/components/search";
import Stats from "@/components/stats";
import { useState } from "react";

export default function Home() {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);

  return (
    <>
      <Header />
      <Search
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        setIsLoading={setIsLoading}
        setCityNotFound={setCityNotFound}
      />
      <Stats
        weatherData={weatherData}
        isLoading={isLoading}
        cityNotFound={cityNotFound}
      />
    </>
  );
}
