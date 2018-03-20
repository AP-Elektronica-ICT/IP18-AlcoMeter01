import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  permissions: any[] = ["BLUETOOTH", "BLUETOOTH_ADMIN", "BLUETOOTH_PRIVILEGED"];

  private macAddress = "98:D3:31:FD:2A:CC";
  constructor(public bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController, private androidPermissions: AndroidPermissions) {
    this.bluetoothSerial.isEnabled().then(() => {
      console.log('hurray it bluetooth is on');
  }, (error) => {
      console.log(error);
        this.bluetoothSerial.enable().then(resp => {
          console.log("bluetooth is enabled now");
      }, (error) => {
        console.log('bluetooth was not enabled');
    });
  });
  }
 
  public startScanning(){
    this.bluetoothSerial.connect(this.macAddress).subscribe((rspo)=>{
      console.log("connected to HC-06 device", rspo);
    }, (error) => {
      console.log("error", error);
    })
  }  
}
