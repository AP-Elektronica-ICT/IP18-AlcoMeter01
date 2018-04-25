import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticatieProvider} from '../../providers/authenticatie/authenticatie';
import { BluetoothProvider} from '../../providers/bluetooth/bluetooth';
import { Chart } from 'chart.js';
import math from 'mathjs';

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

  public meting: any;
  public beschrijving:String = "Een lekkere mojito!";
  resultaat  = [];
  donutChart:any;
  total: number = 2;
  maxPromille: number = 0.5;
  public connectedDevice: any;
  public availableDevices: any[] = [];

  constructor( public bt: BluetoothProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

   }

   public onButtonClick() {

    //this.receiveData();
    this.meting = math.round(math.random(0, 1.5),2);
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

  async startScanning(){
      this.bt.startScanning();
      this.availableDevices = this.bt.availableDevices;
    
  }

  disconnect(){
    this.bt.disconnect();
  }

  selectDevice(device){
    this.bt.selectDevice(device);
    this.connectedDevice = this.bt.connectedDevice;
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
