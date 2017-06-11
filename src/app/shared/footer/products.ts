export class Products {
  public id: number;
  public title: string;
  public price: number;
  public photo_details: {};
  public photo: any;
  public ind: number;

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.photo_details = data.photo_details;
    this.photo = data.photo_details[0].photo;
  }
  
  



}