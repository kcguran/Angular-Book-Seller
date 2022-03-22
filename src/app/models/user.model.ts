import { Role } from "./role.enum";

export class User{
    id : number |undefined;
    username : String = "";
    password : String = "";
    name : String = "";
    token : String = "";
    role: Role = Role.USER;
}