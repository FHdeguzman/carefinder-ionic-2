import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { User } from './user';

@NgModule({
  declarations: [
    User,
  ],
  imports: [
    //IonicModule.forChild(User)
  ],
  exports: [
    User
  ]
})
export class UserModule {}
