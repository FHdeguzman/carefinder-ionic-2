import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyCareRequests page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-care-requests',
  templateUrl: 'my-care-requests.html',
})
export class MyCareRequests {
careRequestsTopMessage: string = "Booking requests are displayed here. Try our hands at managing care requests."

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCareRequests');
  }

}
