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
import { NewAreaDialogComponent } from './new-area-dialog/new-area-dialog.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { InfoParamsDialogComponent } from './info-params-dialog/info-params-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPersonalityPageComponent,
    ChangeParamsPersonalityPageComponent,
    NluPageComponent,
    NewAreaDialogComponent,
    UploadDialogComponent,
    CvCardComponent,
    InfoParamsDialogComponent
  ],
  entryComponents: [
    NewAreaDialogComponent,
    UploadDialogComponent,
    InfoParamsDialogComponent
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
