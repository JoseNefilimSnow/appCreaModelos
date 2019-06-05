import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModelFieldsPage } from './model-fields';

@NgModule({
  declarations: [
    ModelFieldsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModelFieldsPage),
  ],
})
export class ModelFieldsPageModule {}
