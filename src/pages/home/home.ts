import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SeekerOrProviderModal } from '../seeker-or-provider-modal/seeker-or-provider-modal';
import { NgModule } from '@angular/core';
import { IonicModule, } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showLabel: string = "show";

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

  openModal() {
    let myModal = this.modalCtrl.create(SeekerOrProviderModal);
    myModal.present();
  }

  showPassword(input: any): any {
   input.type = input.type === 'password' ?  'text' : 'password';
   this.showLabel = input.type === 'text' ?  'hide' : 'show';
  }





}
