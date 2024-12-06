export interface Books {
  id : number;
  title : string;
  author : string;
  genre : string;
  publish ?: number;
  available: boolean;
  imageURL ?: string;
}
