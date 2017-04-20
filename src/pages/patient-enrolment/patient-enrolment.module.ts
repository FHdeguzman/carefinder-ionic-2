import { NgModule } from '@angular/core';
/*import { IonicModule } from 'ionic-angular';*/
import { PatientEnrolment } from './patient-enrolment';

@NgModule({
  declarations: [
    PatientEnrolment,
  ],
  imports: [
/*    IonicModule.forChild(PatientEnrolment),*/
  ],
  exports: [
    PatientEnrolment
  ]
})
export class PatientEnrolmentModule {}
