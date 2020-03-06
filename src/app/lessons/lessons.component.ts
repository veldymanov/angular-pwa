import { Component, OnInit } from '@angular/core';
import { SwPush } from "@angular/service-worker";

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NewsletterService } from '../core/services/newsletter.service';
import { LessonsService } from "../core/services/lessons.service";

import { Lesson } from '../core/intefaces/lesson';
import { VAPID_PUBLIC_KEY } from '../core/constants/vapid.const';


@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  public isLoggedIn$: Observable<boolean>;
  public lessons$: Observable<Lesson[]>;

  constructor(
    private newsletterService: NewsletterService,
    private lessonsService: LessonsService,
    private swPush: SwPush
  ) { }

  ngOnInit() {
    this.loadLessons();
  }

  public sendNewsletter() {
  }  

  public subscribeToNotifications(): void {
    if (this.swPush.isEnabled) {
      console.log('this.swPush.isEnabled');

      this.swPush.requestSubscription({
        serverPublicKey: VAPID_PUBLIC_KEY
      })
        .then((sub: PushSubscription) => { 
          console.log('Notification Subscriptiion ', sub);

          this.newsletterService.addPushSubscriber(sub)
          
        })
        .catch(err => console.log(err));
    }
  }

  private loadLessons(): void {
    this.lessons$ = this.lessonsService.loadAllLessons().pipe(catchError(err => of([])));
  }
}
