import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  odooJsonRpc
} from '../../providers/odoojsonrpc';
import {
  Utils
} from '../../providers/utils';
import {
  ModelCreationPage
} from '../model-creation/model-creation';

/**
 * Generated class for the ModelFieldsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model-fields',
  templateUrl: 'model-fields.html',
})
export class ModelFieldsPage {

  private id_modelo;
  private nombre_campo;
  private tipo_campo;
  private esObligatorio = false;
  private modelo_relacionado:any=false;
  private campo_de_relacion:any=false;
  private relacionNoRequerida=true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRpc: odooJsonRpc, private utils: Utils) {
    this.id_modelo = this.navParams.get('id');
  }
  relacionRequerida(){
    if(this.tipo_campo==='many2one'){
      this.relacionNoRequerida=false;
    }
    if(this.tipo_campo==='one2many'){
      this.relacionNoRequerida=false;
      this.campo_de_relacion="name";
    } 
  }
  concatenar_campos() {
      if(this.nombre_campo===null || this.nombre_campo===''){
        this.utils.presentAlert('Campo introducido vacio','No puedes crear un campo vacio',[{
          text:"Entendido"
        }])
      }else{
        let campos = {
          model_id: this.id_modelo,
          name:'x_'+this.nombre_campo.toLowerCase(),
          field_description:this.nombre_campo,
          ttype: this.tipo_campo,
          state: 'manual',
          relation:this.modelo_relacionado,
          relation_field:this.campo_de_relacion,
          required: this.esObligatorio
        }
        this.odooRpc.crear_campos_modulo_odoo(campos);
        this.utils.presentToast('¡Campo añadido!', 2000, true,"top");
        this.nombre_campo = "";
        this.tipo_campo = "";
        this.modelo_relacionado=false;
        this.campo_de_relacion=false;
        this.relacionNoRequerida=true;
        this.esObligatorio = false;
      }
  }
  crear_modulo() {
    this.utils.presentToast('¡Modulo Finalizado!', 2500, true,"top");
    this.navCtrl.popTo(ModelCreationPage);
  }
  descartar() {
    this.odooRpc.borrarInstancia('ir_model', this.id_modelo);
    this.utils.presentToast('¡Módulo descartado!', 3000, true,"top");
    this.navCtrl.popTo(ModelCreationPage);
  }
}
