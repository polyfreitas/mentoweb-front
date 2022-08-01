import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class MonitoriaService {

  constructor(private httpClient: HttpClient) { }

  getMonitorias() {
    return this.httpClient.get(API_CONFIG.baseUrl + '/monitoria')
  }

}
