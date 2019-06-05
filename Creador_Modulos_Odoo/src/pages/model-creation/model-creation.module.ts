import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModelCreationPage } from './model-creation';

@NgModule({
  declarations: [
    ModelCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModelCreationPage),
  ],
})
export class ModelCreationPageModule {}
