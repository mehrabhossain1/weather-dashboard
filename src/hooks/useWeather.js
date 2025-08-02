import { useState } from "react";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    const [error, setError] = useState(null);

    const fetchWeatherData = async (latitude, longitude) => {
        //It will fetch weather data based on latitude and longitude

        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching weather data",
            });

            const response = await fetch(``);

            if (!response.ok) {
                const errorMessage = `Fetching weather data failed : ${response.status}`;

                throw new Error(errorMessage);
            }

            // Assuming the response is in JSON format
            const data = await response.json();

            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            };
        } catch (err) {
            setError(err);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };
};
