import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utils } from '../../providers/utils';
import { odooJsonRpc } from '../../providers/odoojsonrpc';
import { ModelCreationPage } from '../model-creation/model-creation';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private db_odoo;
  private email;
  private password
  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRpc :odooJsonRpc, private utils:Utils) {
  }

  login(){
    this.utils.presentLoading("Iniciando Sesión", 0, true);
    this.odooRpc.inicializar(this.db_odoo);
    this.odooRpc.inicioDeSesion(this.email,this.password).then((res:any)=>{
      if(Number(JSON.parse(res._body)['result'].partner_id)){
        localStorage.setItem('TokenContext',JSON.stringify(JSON.parse(res._body)["result"]));
        localStorage.setItem('TokenInicioSesión',this.db_odoo+'|'+this.email+'|'+this.password);
        this.navCtrl.setRoot(ModelCreationPage);
        this.utils.dismissLoading();
      }else{
        this.utils.dismissLoading();
      this.utils.presentAlert('Error al conectar a Odoo','Comprueba que los daros introducidos son correctos',[{text:'Entendido'}]);
      }
    }).catch(err=>{
      this.utils.dismissLoading();
      this.utils.presentAlert('Error al conectar a Odoo','Comprueba que los daros introducidos son correctos'+'\n'+'Error: '+err,[{text:'Entendido'}]);
    })
  }

}
