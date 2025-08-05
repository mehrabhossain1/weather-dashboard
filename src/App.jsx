import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavourtieProvider, WeatherProvider } from "./provider";

function App() {
    return (
        <WeatherProvider>
            <FavourtieProvider>
                <div className="grid place-items-center h-screen">
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>
            </FavourtieProvider>
        </WeatherProvider>
    );
}

export default App;
