import { ConfigService } from "../services/config.service";

export class User {
  public avatar: any;
  public email: string;
  public firstName: string;
  public id: number;
  public lastName: string;
  public username: string;

  constructor(data) {
    this.avatar = data.photo;
    this.email = data.email;
    this.firstName = data.first_name;
    this.id = data.id;
    this.lastName = data.last_name;
    this.username = data.username;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get avatarProfile() {
    return `${ConfigService.mediaSrc}${this.avatar.photo}`
  }
  public getUser() {
    return {
      photo: this.avatar,
      email: this.email,
      first_name: this.firstName,
      id: this.id,
      last_name: this.lastName,
      username: this.username,
    }
  }
}