import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './app.module.material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { CoolStorageModule } from '@angular-cool/storage';

import { AppComponent } from './app.component';
import { MainPersonalityPageComponent } from './main-personality-page/main-personality-page.component';
import { ChangeParamsPersonalityPageComponent } from './change-params-personality-page/change-params-personality-page.component';
import { NluPageComponent } from './nlu-page/nlu-page.component';
import { PersonalityService } from './services/personality.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPersonalityPageComponent,
    ChangeParamsPersonalityPageComponent,
    NluPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgxChartsModule,
    CoolStorageModule
  ],
  providers: [
    PersonalityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
