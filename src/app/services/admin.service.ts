import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  private admins: Admin = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    rol: "admin"
    
  };
  
    public addAdmin(admin:Admin ) : boolean {
        this.admins=admin;
        return true;
    }
    public getAdmin() {
        return this.admins;
    }
}
interface Admin {
  name: string,
  lastName: string,
  email: string,
  password: string,
  rol: string
}

