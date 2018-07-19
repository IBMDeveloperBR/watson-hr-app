import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule,MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule],
})
export class MaterialModule { }