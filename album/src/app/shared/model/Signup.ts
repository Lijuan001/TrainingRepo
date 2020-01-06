export class Signup {
    private fname: string;
    private lname: string;
    private email: string;
    private phone: number;
    private password: string;
    private confirmPassword: string;
    constructor(fname: string, lname: string, email: string,
                phone: number, password: string, confirmPassword: string) {
                    this.fname = fname;
                    this.lname = lname;
                    this.email = email;
                    this.phone = phone;
                    this.password = password;
                    this.confirmPassword = confirmPassword;
    }
}
