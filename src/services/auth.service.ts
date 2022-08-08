import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/config/api.config";
import { Credenciais } from "src/models/credenciais";

import { StorageService } from "./storage.service";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient,
        public storage: StorageService) { }

    authenticate(creds: Credenciais) {
        return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
            observe: 'response',
            responseType: 'text',
        });

    }

    logout() {
        localStorage.clear()
    }
}