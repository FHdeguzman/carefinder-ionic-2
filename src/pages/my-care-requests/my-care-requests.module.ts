import { NgModule } from '@angular/core';
/*import { IonicModule } from 'ionic-angular';*/
import { MyCareRequests } from './my-care-requests';

@NgModule({
  declarations: [
    MyCareRequests,
  ],
  imports: [
/*    IonicModule.forChild(MyCareRequests),*/
  ],
  exports: [
    MyCareRequests
  ]
})
export class MyCareRequestsModule {}
