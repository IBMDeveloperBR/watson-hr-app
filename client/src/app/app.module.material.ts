import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule,MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule],
})
export class MaterialModule { }