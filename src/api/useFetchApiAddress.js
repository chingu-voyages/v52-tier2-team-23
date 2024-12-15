import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

//define API usage
//for address only need house number, street name, street suffix, zip code
const useFetchApiAddress = () => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    const fetchApiAddress = async () => {
      try {
        const response = await axios.get(
          "https://data.lacity.org/resource/4ca8-mxuh.json",
          {
            headers: {
              "X-App-Token": import.meta.env.VITE_LA_CITY_API_TOKEN,
            },
          }
        );
        setAddressData(response.data);
      } catch (error) {
        console.error("Error, failed to load address data", error);
      }
    };

    fetchApiAddress();
  }, []);
  return { addressData };
};

export default useFetchApiAddress;
