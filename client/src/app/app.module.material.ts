import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule],
})
export class MaterialModule { }