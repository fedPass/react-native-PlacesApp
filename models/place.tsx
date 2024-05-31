export class Place {
  title: string;
  imageUri: string;
  address: string;
  coords: { lat: number; lon: number; };
  id: number;
  constructor(title:string, imageUri:string, address:string, coords: {lat: number, lon: number}, id: number) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.coords = coords;
    this.id = id
  }
}