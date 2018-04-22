import { Component, transition } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController, AlertController } from 'ionic-angular';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseProvider} from '../../providers/firebase/firebase'


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public settingsForm: FormGroup;
  public connectedDevice: any;
  public availableDevices: any[] = [];
  public settings: any;
  

  constructor(private alert: AlertController,private loadingCtrl: LoadingController, private formBuilder: FormBuilder, public bt: BluetoothProvider, public navCtrl: NavController, public navParams: NavParams, private fb: FirebaseProvider) {
    this.settingsForm = formBuilder.group({
      emergencyNumber:['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      country:['', Validators.required]
    });
    
    this.getSettings();
    
    
  }

  async save(){
    const loading: Loading = this.loadingCtrl.create();
    loading.present();
    try{
      await this.fb.saveSettings(this.settingsForm.value.emergencyNumber, this.settingsForm.value.country);
      loading.dismiss();
      const alert = this.alert.create({
        message: "Changes saved succesfully",
        buttons: [{text: 'Ok', role: 'cancel'}]
      });
      alert.present();
    }catch(error){
      loading.dismiss();
      const alert = this.alert.create({
        message: error.message,
        buttons: [{text: 'Ok', role: 'cancel'}]
      });
      alert.present();
    }
  }

  startScanning(){
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

