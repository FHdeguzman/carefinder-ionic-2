import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatientEnrolment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-patient-enrolment',
  templateUrl: 'patient-enrolment.html',
})
export class PatientEnrolment {
  patientEnrolmentMessage: string = "Creating patient profile will help us build a pool of care providers to meet your needs. Build profiles for your family members who need care. You can also create one for yourself."

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientEnrolment');
  }

}
