import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/config/api.config";
import { CredenciaisDTO } from "src/models/credenciais.dto";
import { localUser } from "src/models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from 'angular-jwt';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, public storage: StorageService){

    }
    
 authenticate(creds: CredenciaisDTO){
    return this.http.post(
        `${API_CONFIG.baseUrl}/login`,
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
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logout (){
       this.storage.setLocalUser(null);
    }
}