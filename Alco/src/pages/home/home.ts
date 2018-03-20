import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private macAddress = "98:D3:31:FD:2A:CC";
  constructor(public bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
   
  }
 
  public startScanning(){
    this.bluetoothSerial.connect(
      this.macAddress
    );

    if(this.bluetoothSerial.isConnected()){
      console.log("connected");
      var message = this.bluetoothSerial.subscribe("\n");
      console.log(message);
    }
    else{
      console.log("not connected");
    }
  }
}
