import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.rootPage = Dashboard;
  this.dashboardPage = Dashboard;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

  openPage(p) {
    this.rootPage = p;
  }


}
