import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElvnmayComponent } from './elvnmay/elvnmay.component';
import { TenmayComponent } from './tenmay/tenmay.component';
import { May12Component } from './may12/may12.component';
import { May13Component } from './may13/may13.component';
import { May14Component } from './may14/may14.component';
import { May15Component } from './may15/may15.component';
import { May16Component } from './may16/may16.component';
import { May17Component } from './may17/may17.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {
    path:'elvnmay',component:ElvnmayComponent
  },
  {
    path:'tenmay',component:TenmayComponent
  },
  {
    path:'may12',component:May12Component
  },
  {
    path:'may13',component:May13Component
  },
  {
    path:'may14',component:May14Component
  },
  {
    path:'may15',component:May15Component
  },
  {
    path:'may16',component:May16Component
  },
  {
    path:'may17',component:May17Component
  },
  {
    path:'header',component:HeaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
