import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { odooJsonRpc } from '../../providers/odoojsonrpc';
import { Utils } from '../../providers/utils';
import { ModelFieldsPage } from '../model-fields/model-fields';


/**
 * Generated class for the ModelCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model-creation',
  templateUrl: 'model-creation.html',
})
export class ModelCreationPage {

  private nombre_modelo;
  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRpc:odooJsonRpc,private utils:Utils) {
  }
  boton_inutil(){
    this.odooRpc.obtener_estructura().then((res:any)=>{
      console.log(JSON.parse(res._body));
    }).catch(err=>{
      alert(err)
    })
  }
  crear_modelo(){
    this.odooRpc.crear_modulo_odoo(this.nombre_modelo).then((res:any)=>{
      this.navCtrl.push(ModelFieldsPage,{id:JSON.parse(res._body)['result']});
    }).catch(err=>{
      alert(err)
    });
  }
}
