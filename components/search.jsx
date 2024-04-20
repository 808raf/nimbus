import { Input } from "@/components/ui/input";
import { Search as Magnify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Search = ({ setWeatherData, setIsLoading, setCityNotFound }) => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    weather(location);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const weather = async () => {
    try {
      await setIsLoading(true);

      const apiKey = "20d420efa5b64e92ba702217241804";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
      const response = await fetch(url);

      if (!response.ok) {
        setCityNotFound(true);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setWeatherData(data);
      setCityNotFound(false);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center content-center mt-2 px-2 items-center">
      <Input
        className="w-1/4 min-w-40"
        type="search"
        placeholder="City"
        id="location"
        name="location"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={location}
      />
      <Button
        type="submit"
        variant="outline"
        size="icon"
        className="ml-2"
        onClick={handleSubmit}
      >
        <Magnify className="h-4 w-4" />
      </Button>
    </div>
  );
};
export default Search;
