import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './components/banner/banner.component';
import { RowComponent } from './components/row/row.component';
import { MovieComponent } from './components/movie/movie.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import config from './credentials';
import {
  AppState,
  INITIAL_STATE,
  rootReducer,
} from './reducers/modal.state';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeRowComponent } from './components/home-row/home-row.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    RowComponent,
    MovieComponent,
    YoutubeComponent,
    HomeComponent,
    MainPageComponent,
    HomeRowComponent,
    SignInComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    NgReduxModule,
    NgxYoutubePlayerModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
