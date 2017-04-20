import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';
import { HomePage } from '../home/home';
import { MyCareRequests } from '../my-care-requests/my-care-requests';
import { Profile } from '../profile/profile';
import { PatientEnrolment } from '../patient-enrolment/patient-enrolment';
import { Search } from '../search/search';
import { Scheduler } from '../scheduler/scheduler';
import { Settings } from '../settings/settings';

/**
 * Generated class for the Menu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {
  private rootPage;
  private dashboardPage;
  private homePage;
  private myCareRequestsPage;
  private profilePage;
  private patientEnrolmentPage;
  private searchPage;
  private schedulerPage;
  private settingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.rootPage = Dashboard;
  this.dashboardPage = Dashboard;
  this.homePage = HomePage;
  this.myCareRequestsPage = MyCareRequests;
  this.profilePage = Profile;
  this.patientEnrolmentPage = PatientEnrolment;
  this.searchPage = Search;
  this.schedulerPage = Scheduler;
  this.settingsPage = Settings;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

  openPage(p) {
    this.rootPage = p;
  }
  logout(){
    this.navCtrl.setRoot(HomePage);
  }



}
