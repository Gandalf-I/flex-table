import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppWrapperComponent } from '@layouts/app-wrapper/app-wrapper.component';
import { HeaderComponent } from './app-wrapper/header/header.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [AppWrapperComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzButtonModule,
  ],
})
export class LayoutModule { }
