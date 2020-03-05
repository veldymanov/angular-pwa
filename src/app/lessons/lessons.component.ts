import { Component, OnInit } from '@angular/core';
import { SwPush } from "@angular/service-worker";

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LessonsService } from "../core/services/lessons.service";
import { Lesson } from "../core/intefaces/lesson";


@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  lessons$: Observable<Lesson[]>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private lessonsService: LessonsService
  ) { }

  ngOnInit() {
    this.loadLessons();
  }

  loadLessons() {
    this.lessons$ = this.lessonsService.loadAllLessons().pipe(catchError(err => of([])));
  }
}
