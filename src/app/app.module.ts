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
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Menu } from '../pages/menu/menu';
import { MyCareRequests } from '../pages/my-care-requests/my-care-requests';
import { Profile } from '../pages/profile/profile';
import { PatientEnrolment } from '../pages/patient-enrolment/patient-enrolment';
import { Search } from '../pages/search/search';
import { Scheduler } from '../pages/scheduler/scheduler';
import { Settings } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Registration,
    User,
    SeekerOrProviderModal,
    ForgotPassword,
    Dashboard,
    Menu,
    MyCareRequests,
    Profile,
    PatientEnrolment,
    Search,
    Scheduler,
    Settings
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
    SeekerOrProviderModal,
    ForgotPassword,
    Dashboard,
    Menu,
    MyCareRequests,
    Profile,
    PatientEnrolment,
    Search,
    Scheduler,
    Settings
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
