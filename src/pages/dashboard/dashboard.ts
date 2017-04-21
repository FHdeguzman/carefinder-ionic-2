import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPersonalDetails } from '../../utils/domains/dashboard-personal-details.model';
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.html',
})
export class Dashboard implements OnInit {
    dashboardTopMessage: string = "Fill in the necessary informations and add atleast one (1) patient to be able to book a care request."
    personalDetailsList: DashboardPersonalDetails[];


    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ngOnInit() {
        this.personalDetailsList = [
          {isEditable:false, name:'Name'},
          {isEditable:true, name:'Profile Picture'},
          {isEditable:true, name:'Birthdate'},
          {isEditable:true, name:'Gender'},
          {isEditable:true, name:'Address'}
        ];

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad Dashboard');
    }
};
