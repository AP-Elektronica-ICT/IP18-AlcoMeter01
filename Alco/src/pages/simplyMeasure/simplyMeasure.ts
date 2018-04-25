import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticatieProvider} from '../../providers/authenticatie/authenticatie';
import { BluetoothSerial }  from '@ionic-native/bluetooth-serial';
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
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;

  constructor(public alertCtrl:AlertController, public bluetoothSerial: BluetoothSerial, public navCtrl: NavController, public navParams: NavParams) {

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

  startScanning() {
    
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach(element => {
        // alert(element.name);
      });
    },
      (err) => {
        console.log(err);
        const alert = this.alertCtrl.create({
          message: err + " -> Bluetooth Not Available",
          buttons: [{text: 'Ok', role: 'cancel'}]
        });
        alert.present();
      });

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      });
  }
  success = (data) => alert(data);
  fail = (error) => alert(error);

  selectDevice(device: any) {

    let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(device.address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();

  }

  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }


  public receiveData(){
    this.bluetoothSerial.readUntil("f").then(data => { 
      console.log(data); 
      this.meting = Number(data.substring(0, (data.length-1))); 
      console.log(this.meting);
      this.bluetoothSerial.clear();   
    });
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
