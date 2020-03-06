import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(
    private http: HttpClient
  ) {  }

  public addPushSubscriber(sub: PushSubscription): Observable<any> { 
    return this.http.post('/api/notifications', sub);
  }

  public send(): Observable<any> {
    return this.http.post('/api/newsletter', null);
  }
}