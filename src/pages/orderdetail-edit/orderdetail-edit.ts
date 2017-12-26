import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the OrderdetailEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderdetail-edit',
  templateUrl: 'orderdetail-edit.html',
})
export class OrderdetailEditPage {

  constructor(
    public navCtrl: NavController, 
    public storage: Storage,
    public translate : TranslateService,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailEditPage');
  }

}
