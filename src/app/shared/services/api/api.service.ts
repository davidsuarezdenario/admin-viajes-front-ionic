import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from "../../../../environments/environment.prod";
import { GlobalService } from "../global/global.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jwt: string = "";

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  createHeaders() {
    return new HttpHeaders()
      .set('x-api-key', environment.api.apiKey)
      .set('Authorization', this.jwt);
  }

  async request(method: string, url: string, data?: any) {
    let result;
    switch (method) {
      case 'GET':
        result = this.http.get(environment.api.url + url, { headers: this.createHeaders() });
        break;
      case 'POST':
        result = this.http.post(environment.api.url + url, data, { headers: this.createHeaders() });
        break;
      case 'PUT':
        result = this.http.put(environment.api.url + url, data, { headers: this.createHeaders() });
        break;
      case 'DELETE':
        result = this.http.delete(environment.api.url + url, { headers: this.createHeaders() });
        break;
      default:
        throw new Error(`Invalid method: ${method}`);
    }
    return await lastValueFrom(result);
  }

}
