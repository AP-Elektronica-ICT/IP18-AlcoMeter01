import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';
import { Chart } from 'chart.js';
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
  donutChart:any;
  total: number = 2;
  maxPromille: number = 0.5;

  constructor(public fb: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams, public afAuth: AuthenticatieProvider, public bt: BluetoothProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }


  public buttonClicked: boolean = false; //Whatever you want to initialise it as

  public onButtonClick() {

    //this.receiveData();
    this.meting = 0.8;
    this.fb.saveMeasurement(this.meting);
    
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
