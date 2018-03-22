import { Component, transition } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public connectedDevice: any;
  public availableDevices: any[] = [];
  public meting: any;

  constructor(public bt: BluetoothProvider, public navCtrl: NavController, public navParams: NavParams) {
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

