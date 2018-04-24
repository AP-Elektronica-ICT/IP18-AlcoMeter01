import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Chart } from 'chart.js';
import { CallNumber } from '@ionic-native/call-number';
import * as math from 'mathjs';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {


  public meting: any;
  public beschrijving:String = "Een lekkere mojito!";
  resultaat  = [];
  donutChart:any;
  total: number = 1.5;
  maxPromille: number = 0.0;
  emergency: any;
  private country:any;

  constructor(public bluetoothSerial: BluetoothSerial, public alertCtrl: AlertController, private menuCtrl: MenuController, public fb: FirebaseProvider,private Noodnummer: CallNumber, public navCtrl: NavController, public navParams: NavParams, public afAuth: AuthenticatieProvider, public bt: BluetoothProvider) {
    this.menuCtrl.enable(true, 'menu');
    /*this.fb.getSettings().then(data => {
      this.emergency.toString =  data.emergencyNumber;
    });*/
    this.fb.getSettings().then(data => {
      this.country = data.country;
      this.emergency= data.emergencyNumber;
      if( this.country == 'België'){
        this.maxPromille = 0.5;
      }
      if( this.country == 'Finland'){
        this.maxPromille = 0.5;
      }
      console.log(this.emergency);
      console.log(this.maxPromille);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
 
  }


  public buttonClicked: boolean = false; //Whatever you want to initialise it as

  public onButtonClick() {
   /* this.bluetoothSerial.write('2').then(success => {
      console.log(success);
    }, failed => {
      console.log(failed);
    });*/

    //this.receiveData()
    this.meting = math.round(math.random(0, 1.5),2);

    
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
  public Emergency() {
    
    this.Noodnummer.callNumber(this.emergency, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => {
      console.log('Error launching dialer')
      console.log(this.emergency)

      const alert = this.alertCtrl.create({
        message: 'Error launching dialer',
        buttons: [{text: 'Ok', role: 'cancel'}]
      });
      alert.present();
    });
  
    }

    public receiveData(){
      this.bluetoothSerial.readUntil("f").then(data => { 
        console.log(data); 
        this.meting = Number(data.substring(0, (data.length-1))); 
        console.log(this.meting);
        this.bluetoothSerial.clear();    
        this.resultaat= [this.meting, this.beschrijving];
        this.fb.saveMeasurement(this.resultaat);
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
