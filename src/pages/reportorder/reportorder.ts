import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ReportorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportorder',
  templateUrl: 'reportorder.html',
})
export class ReportorderPage {
  public language = 'id';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public translateservice : TranslateService,
    public storage : Storage,
    public modalCtrl: ModalController) {


      console.log(this.translateservice.getDefaultLang());
      this.translateservice.get('HELLO').subscribe(
        value => {
          // value is our translateserviced string
          console.log(value);
        });
      console.log(this.translateservice.getDefaultLang(), 'Defaultnya');
      this.storage.get('language').then(result => {
        if (result == null) {
          console.log(123);
          this.storage.set('language', 'id');
          this.translateservice.setDefaultLang('id');
        } else {
          this.language = this.translateservice.getDefaultLang();
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportorderPage');
        
  }


  view(){
    this.navCtrl.push('DetailreportPage');
  }

}
