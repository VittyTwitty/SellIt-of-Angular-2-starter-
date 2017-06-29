export class Auth {
    public email: string;
    public password: string;

    constructor(data) {
        this.email = data.email;
        this.password = data.password;
    }
}
