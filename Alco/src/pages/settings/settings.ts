import { Component, transition } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public meting: any;

  constructor(private formBuilder: FormBuilder, public bt: BluetoothProvider, public navCtrl: NavController, public navParams: NavParams, private fb: FirebaseProvider) {
    this.settingsForm = formBuilder.group({
      emergencyNumber:[''],
      country:['']
    });
    
    this.fb.getSettings();
    console.log("profile in settingspage: ", this.fb.getUserProfile());
    
  }

  save(){
    this.fb.saveSettings(this.settingsForm.value.emergencyNumber, this.settingsForm.value.country);
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

  receiveData(){
    this.bt.receiveData();
    this.meting = this.bt.meting;
  }
}

