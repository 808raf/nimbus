import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <img
          src={`${weatherData.current.condition.icon}`}
          alt="weather condition icon"
        />
      </CardFooter>
    </Card>
  );
};
export default WeatherCard;
