// TODO: generate api_key and save it in dovenv
const GOOGLE_API_KEY = '<API_KEY>';

export function getMapPreview(lat: string, lon: string) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=400x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lon}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
