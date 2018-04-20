import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';
import { Chart } from 'chart.js';
import { CallNumber } from '@ionic-native/call-number';

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

  public meting: number;
  public beschrijving:String = "Een lekkere mojito!";
  resultaat  = [];
  donutChart:any;
  total: number = 2;
  maxPromille: number = 0.5;

  constructor(public fb: FirebaseProvider,private Noodnummer: CallNumber, public navCtrl: NavController, public navParams: NavParams, public afAuth: AuthenticatieProvider, public bt: BluetoothProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }


  public buttonClicked: boolean = false; //Whatever you want to initialise it as

  public onButtonClick() {

    //this.receiveData();
    this.meting = 0.1;
    this.resultaat= [this.meting, this.beschrijving];
    this.fb.saveMeasurement(this.resultaat);
    
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
    this.Noodnummer.callNumber("0495142810", true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  
    }
  logout(){
    this.afAuth.logOut();
    this.navCtrl.push('LoginPage');
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
