import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ModelCreationPage } from '../pages/model-creation/model-creation';
import { ModelFieldsPage } from '../pages/model-fields/model-fields';
import { HttpModule } from '@angular/http';
import { odooJsonRpc } from '../providers/odoojsonrpc';
import { Utils } from '../providers/utils';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ModelCreationPage,
    ModelFieldsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ModelCreationPage,
    ModelFieldsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    odooJsonRpc,
    Utils,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
