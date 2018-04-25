import { Component, transition } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController, AlertController } from 'ionic-angular';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseProvider} from '../../providers/firebase/firebase'
import { MainPage } from '../main/main';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public settingsForm: FormGroup;
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  public settings: any;
  public emergencyNumber: string;
  
  

  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController,private loadingCtrl: LoadingController, private formBuilder: FormBuilder, public bt: BluetoothProvider, public navCtrl: NavController, public navParams: NavParams, private fb: FirebaseProvider) {
    this.settingsForm = formBuilder.group({
      emergencyNumber:['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      country:['', Validators.required]
    });
   // this.navCtrl.push(MainPage, this.settingsForm.value.emergencyNumber);
    this.getSettings();
    
  }

  async save(){
    const loading: Loading = this.loadingCtrl.create();
    loading.present();
    try{
      await this.fb.saveSettings(this.settingsForm.value.emergencyNumber, this.settingsForm.value.country);
      loading.dismiss();
      const alert = this.alertCtrl.create({
        message: "Changes saved succesfully",
        buttons: [{text: 'Ok', role: 'cancel'}]
      });
      alert.present();
    }catch(error){
      loading.dismiss();
      const alert = this.alertCtrl.create({
        message: error.message,
        buttons: [{text: 'Ok', role: 'cancel'}]
      });
      alert.present();
    }
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


  public sendData(){
    this.bluetoothSerial.write('2').then(success => {
      console.log(success);
    }, failed => {
      console.log(failed);
    });
    
  }


  async getSettings(){
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

    await this.fb.getSettings().then(value => {
      this.settings = value;
      loading.dismiss();
    });
    console.log("settings in settingspage: ", this.settings);
  }
  

}

