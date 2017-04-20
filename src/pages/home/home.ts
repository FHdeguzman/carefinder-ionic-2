import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SeekerOrProviderModal } from '../seeker-or-provider-modal/seeker-or-provider-modal';
import { NgModule } from '@angular/core';
import { IonicModule, } from 'ionic-angular';
import { ForgotPassword } from '../forgot-password/forgot-password';
/*import { Dashboard } from '../dashboard/dashboard';*/
import { Menu } from '../menu/menu';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    showLabel: string = "show";

    constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

    login() {
        this.navCtrl.setRoot(Menu);
    }

    openModal() {
        let myModal = this.modalCtrl.create(SeekerOrProviderModal);
        myModal.present();
    }

    showPassword(input: any): any {
        input.type = input.type === 'password' ? 'text' : 'password';
        this.showLabel = input.type === 'text' ? 'hide' : 'show';
    }

    goToForgotPasswordModal() {
        let forgotPasswordModal = this.modalCtrl.create(ForgotPassword);
        forgotPasswordModal.present();

    }


}
