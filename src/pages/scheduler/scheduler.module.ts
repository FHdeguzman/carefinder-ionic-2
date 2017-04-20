import { NgModule } from '@angular/core';
/*import { IonicModule } from 'ionic-angular';*/
import { Scheduler } from './scheduler';

@NgModule({
  declarations: [
    Scheduler,
  ],
  imports: [
/*    IonicModule.forChild(Scheduler),*/
  ],
  exports: [
    Scheduler
  ]
})
export class SchedulerModule {}
