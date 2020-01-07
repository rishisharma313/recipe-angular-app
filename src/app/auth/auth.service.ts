import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})

export class AuthService{

    constructor(private http:HttpClient){}

    signup(email:string, password:string){
        this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrDgvsQcsH4npSXMhYeksq2Yz-9MPxL_8',
        {email:email, password:password, returnSecureToken:true})
    }

}