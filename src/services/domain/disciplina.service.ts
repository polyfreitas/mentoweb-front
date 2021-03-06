import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DisciplinaDTO } from "src/models/Disciplina.dto";

@Injectable()
export class DisciplinaService {
    constructor(public http: HttpClient){
    }
    findAll() : Observable<DisciplinaDTO[]> {
        return this.http.get<DisciplinaDTO[]>("http://localhost:8081/disciplina");
    }
}