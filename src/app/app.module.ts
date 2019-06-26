import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { JionUsComponent } from './jion-us/jion-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccountComponent } from './account/account.component';
import { ServeicesComponent } from './serveices/serveices.component';
import {FormsModule} from '@angular/forms';



const appRoutes: Routes =
  [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'jionUs', component: JionUsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'account', component: AccountComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    JionUsComponent,
    GalleryComponent,
    AccountComponent,
    ServeicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
