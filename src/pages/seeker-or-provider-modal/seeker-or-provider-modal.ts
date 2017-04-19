import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registration } from '../registration/registration';
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-seeker-or-provider-modal',
  templateUrl: 'seeker-or-provider-modal.html',
})
export class SeekerOrProviderModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekerOrProviderModal');
  }

closeModal() {
  this.viewCtrl.dismiss();
}

goRegistration() {
  this.navCtrl.push(Registration);
}

}
