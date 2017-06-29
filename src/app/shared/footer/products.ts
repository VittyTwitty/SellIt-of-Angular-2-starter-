export class Products {
  public author: any;
  public id: number;
  public title: string;
  public price: number;
  public photo_details: any;
  public photo: any;
  public ind: number;

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.author = data.author;
    this.photo_details = data.photo_details;
    // this.photo = data.photo_details[0].photo;
    this.photo = '';
  }

  get image() {

    return this.photo_details.length ? this.photo_details[0].photo : '';

  }



}
