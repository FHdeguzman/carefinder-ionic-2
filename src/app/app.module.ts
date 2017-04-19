import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Registration } from '../pages/registration/registration';
import { User } from '../pages/user/user';
import { SeekerOrProviderModal } from '../pages/seeker-or-provider-modal/seeker-or-provider-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Registration,
    User,
    SeekerOrProviderModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Registration,
    User,
    SeekerOrProviderModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
