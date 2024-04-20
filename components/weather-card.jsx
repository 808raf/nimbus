import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

const WeatherCard = ({ weatherData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Weather</CardTitle>
        <CardDescription>
          {weatherData.location.name}, {weatherData.location.region}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {weatherData.current.temp_c} °C / {weatherData.current.temp_f} °F
        </p>
      </CardContent>
      <CardFooter>
        <p>{weatherData.current.condition.text}</p>
        <Image
          src={`https:${weatherData.current.condition.icon}`}
          alt="weather condition icon"
          width={64}
          height={64}
        />
      </CardFooter>
    </Card>
  );
};
export default WeatherCard;
