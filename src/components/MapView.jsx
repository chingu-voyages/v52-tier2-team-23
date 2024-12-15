import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function MapView() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <APIProvider apiKey={apiKey}>
        <Map
          style={{ width: "100%", height: "100vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
}