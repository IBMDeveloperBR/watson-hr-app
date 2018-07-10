import {MatButtonModule, MatCheckboxModule, MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule],
})
export class MaterialModule { }