import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetectionStrategyComponent } from './components/detection-strategy/detection-strategy.component';
import { OnPushComponent } from './components/detection-strategy/on-push/on-push.component';
import { DefaultComponent } from './components/detection-strategy/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    DetectionStrategyComponent,
    OnPushComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
