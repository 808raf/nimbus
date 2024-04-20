import SpinnerWithText from "./ui/spinner-with-text";
import WeatherCard from "./weather-card";

const Stats = ({ weatherData, isLoading, cityNotFound }) => {
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center mt-8">
          <SpinnerWithText />
        </div>
      ) : cityNotFound ? (
        <div className="flex justify-center">
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-destructive">
            City not found. Please try again.
          </p>
        </div>
      ) : weatherData.location ? (
        <div className="mt-4 flex justify-center content-center">
          <WeatherCard weatherData={weatherData} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Stats;
