export class Place {
  title: string;
  imageUri: string;
  address: string;
  coords: { lat: number; lon: number; };
  id: string;
  constructor(title:string, imageUri:string, address:string, coords: {lat: number, lon: number}) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.coords = coords;
    this.id = new Date().toString() + Math.random().toString()
  }
}