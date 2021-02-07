import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InterceptorService } from './services/interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerService } from './services/spinner.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    ButtonsComponent,
    SpinnerComponent,
    GalleryComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    SpinnerService,
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
