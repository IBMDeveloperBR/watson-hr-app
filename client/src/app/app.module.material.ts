import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule,MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule],
})
export class MaterialModule { }