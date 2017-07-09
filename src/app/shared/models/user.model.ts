import { ConfigService } from '../services/config.service';

export class User {
  public avatar: any;
  public email: string;
  public firstName: string;
  public id: number;
  public lastName: string;
  public username: string;
  public newPassword1: string;
  public newPassword2: string;
  public oldPassword: string;

  constructor(data) {
    this.avatar = data.photo;
    this.email = data.email;
    this.firstName = data.first_name;
    this.id = data.id;
    this.lastName = data.last_name;
    this.username = data.username;
    this.newPassword1 = data.new_password1;
    this.newPassword2 = data.new_password1;
    this.oldPassword = data.old_password1;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get avatarProfile() {
    return `${ConfigService.mediaSrc}${this.avatar.photo}`;
  }
  public getUser() {
    return {
      photo: this.avatar,
      email: this.email,
      first_name: this.firstName,
      id: this.id,
      last_name: this.lastName,
      username: this.username,
    };
  }
}
