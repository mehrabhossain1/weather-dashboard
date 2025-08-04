import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, setValue]);
};

export default useLocalStorage;
