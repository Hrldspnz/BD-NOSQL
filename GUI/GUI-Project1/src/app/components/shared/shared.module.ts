import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,   
    MatSortModule,
    MatCardModule,
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,   
    MatSortModule,
    MatCardModule,
  ]
})
export class SharedModule { }