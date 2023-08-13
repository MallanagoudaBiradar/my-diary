import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenmayComponent } from './tenmay/tenmay.component';
import { ElvnmayComponent } from './elvnmay/elvnmay.component';
import { May12Component } from './may12/may12.component';
import { May13Component } from './may13/may13.component';
import { May14Component } from './may14/may14.component';
import { May15Component } from './may15/may15.component';
import { May16Component } from './may16/may16.component';
import { May17Component } from './may17/may17.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    TenmayComponent,
    ElvnmayComponent,
    May12Component,
    May13Component,
    May14Component,
    May15Component,
    May16Component,
    May17Component,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
