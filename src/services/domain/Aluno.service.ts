import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";
import { AlunoDTO } from "src/models/Aluno.dto";
import { StorageService } from "../storage.service";

@Injectable ()
export class AlunoService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }
        
    findById(id: string) : Observable<AlunoDTO> {

        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders ({'Authorization': 'Bearer' + token});

        return this.http.get<AlunoDTO>(
            ´${API_CONFIG.baseUrl}/aluno/id?value=${id}´,
            {'headers': authHeader});
        }
}