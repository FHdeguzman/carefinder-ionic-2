import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { SeekerOrProviderModal } from './seeker-or-provider-modal';

@NgModule({
  declarations: [
    SeekerOrProviderModal,
  ],
  imports: [
    //IonicModule.forChild(SeekerOrProviderModal),
  ],
  exports: [
    SeekerOrProviderModal
  ]
})
export class SeekerOrProviderModalModule {}
