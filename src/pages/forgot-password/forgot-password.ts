import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ForgotPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPassword {
  forgotPasswordMessage:string = "You can change or reset the password for your ElderCare Portal account by providing your email address."

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPassword');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
