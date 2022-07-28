import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/config/api.config";
import { CredenciaisDTO } from "src/models/Credenciais.dto";
import { localUser } from "src/models/local_user";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage: StorageService){

    }
    
 authenticate(creds: CredenciaisDTO){
    return this.http.post(
        "http://localhost:8081",
    creds,
    {
        observe:'response',
        responseType:'text'
        });
    }

    successfulLogin(authorizationValue : string){
        let tok = authorizationValue.substring(7);
        let user : localUser = {
            token: tok,
            email: '',
            id: ""
        };
        this.storage.setLocalUser(user);
    }

    logout (){
       this.storage.setLocalUser(null);
    }
}