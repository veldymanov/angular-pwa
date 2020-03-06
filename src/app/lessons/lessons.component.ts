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
  public pushSubs: PushSubscription;

  constructor(
    private newsletterService: NewsletterService,
    private lessonsService: LessonsService,
    private swPush: SwPush
  ) { }

  ngOnInit() {
    this.loadLessons();
  }

  public sendNewsletter(): void {
    console.log('Sending newsletter to all Subscribers ...');

    this.newsletterService.send()
      .subscribe(resp => console.log('sendNewsletter() ', resp));
  }  

  public subscribeToNotifications(): void {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({
        serverPublicKey: VAPID_PUBLIC_KEY
      })
        .then((sub: PushSubscription) => { 
          this.pushSubs = sub;
          console.log('Notification Subscriptiion ', sub);

          this.newsletterService.addPushSubscriber(sub).subscribe(
            resp => console.log('Sent push subscription object to server ', resp),
            err => console.log('Could not send subscription object to server, reason: ', err)
          )

        })
        .catch(err => console.log(err));
    }
  }

  private loadLessons(): void {
    this.lessons$ = this.lessonsService.loadAllLessons().pipe(catchError(err => of([])));
  }
}
