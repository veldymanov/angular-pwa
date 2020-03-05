import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),    
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
