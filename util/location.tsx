import axios from "axios";

// TODO: generate api_key and save it in dovenv
const GOOGLE_API_KEY = '<API_KEY>';

export function getMapPreview(lat: string, lon: string) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=400x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lon}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

// GOOGLE REVERSE GEOCODING
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

// Reverse Geocode (Convert coordinates to human-readable address):
export async function convertCoordsToAddress(lat: string, lon: string) {
  const addressUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
  const response = await axios.get(addressUrl);
  return response.data.display_name;
}
