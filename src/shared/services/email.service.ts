import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IContact } from '../interfaces/IContact';
import { concat } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  urlMain = `${environment.apiEmail}/message`
  constructor(private http : HttpClient) { }


  SendEmail(contact : IContact){

  return this.http.post(`${this.urlMain}/send_email`, contact);
  }
}
