import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticatieProvider} from '../../providers/authenticatie/authenticatie';
import { BluetoothProvider} from '../../providers/bluetooth/bluetooth';
import { Chart } from 'chart.js';

/**
 * Generated class for the TestHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simply-measure',
  templateUrl: 'simplyMeasure.html',
})
export class SimplyMeasurePage {

  public meting: number;
  public beschrijving:String = "Een lekkere mojito!";
  resultaat  = [];
  donutChart:any;
  total: number = 2;
  maxPromille: number = 0.5;

  constructor(public bt: BluetoothProvider, public navCtrl: NavController, public navParams: NavParams) {

  }



  ionViewDidLoad() {


   }

   public onButtonClick() {

    //this.receiveData();
    this.meting = 0.12;
    this.total = 2;
    this.resultaat= [this.meting, this.beschrijving];
        
    this.donutChart = new Chart(document.getElementById('donutChart'), {
      
                 type: 'doughnut',
                 data: {
                     labels: [this.label()],
                     datasets: [{
                         label: '# alcohol promille',
                         data: [this.meting, this.total-this.meting],
                         backgroundColor: [
                           
                           this.color(),
                           'rgb(255, 206, 86)'
                            
                         ]
                     }]
                 }
      
             });
  }


  private receiveData(){
    this.bt.receiveData();
    this.meting = this.bt.meting;
  }

  private color(){
    if(this.meting < this.maxPromille)
    return 'rgb(75, 192, 192)';
    else 
    return 'rgb(255, 99, 132)';
  }

  private label(){
    if(this.meting < this.maxPromille)
    return "Drive";
    else 
    return 'No drive';
  }
}
