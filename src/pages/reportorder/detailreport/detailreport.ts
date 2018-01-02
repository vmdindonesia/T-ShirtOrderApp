import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { OzanorderApi } from './../../../shared/sdk/services/custom/Ozanorder';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the DetailreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailreport',
  templateUrl: 'detailreport.html',
})
export class DetailreportPage {
  public viewdataDP: any;

  constructor(
    public modalctrl: ModalController,
    public navCtrl: NavController,
    public translate : TranslateService,
    public storage : Storage,
    public navParams: NavParams,
    public ozanorderapi: OzanorderApi
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailreportPage');
    
    const dp = {
      statusDP : 2
    }
    
    this.ozanorderapi.getreportDP(dp).subscribe((result) =>{
      console.log(result, 'data DP');

    this.viewdataDP = result; 
    console.log(this.viewdataDP)
    });  
  }
  
  public lookingdetailDP(event){
    console.log(event)
    let modal = this.modalctrl.create('LookingDetailOrderPage', {event});
    modal.present();
  }

  public downloadPDF()
  {
   this.ozanorderapi.download(result => {
     console.log(result, 'kosolognye')
   })

  };
}
