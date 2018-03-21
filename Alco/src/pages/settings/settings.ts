import { Component, transition } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { User } from '../../models/user';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  permissions: any[] = ["BLUETOOTH", "BLUETOOTH_ADMIN", "BLUETOOTH_PRIVILEGED"];
  public pairedDevice: any;
  public availableDevices: any[] = [];
  public scanning: Boolean;
  //private macAddress = "98:D3:31:FD:2A:CC"; mac adres van bluetoothmodule van Elke

  constructor(public bluetoothSerial: BluetoothSerial, public navCtrl: NavController, public navParams: NavParams, private androidPermissions: AndroidPermissions, private alertCtrl: AlertController) {
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
   
    public connectMAC(mac: string){
      this.bluetoothSerial.connect(mac).subscribe((rspo)=>{
        console.log("connected to HC-06 device", rspo);
      }, (error) => {
        console.log("error", error);
      })
    }
    
    public startScanning(){
      this.scanning = true;
      var i = 0;
      this.bluetoothSerial.setDeviceDiscoveredListener().forEach(
        device => {
          console.log(device.id);
          this.availableDevices[i] = device;
          console.log("unpaired devices: " + this.availableDevices[i].name);
          i++;
    });
      this.bluetoothSerial.discoverUnpaired();
      
    }


  
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
              if(this.pairedDevice != null){
                if(device.id == this.pairedDevice.id) {
                  this.bluetoothSerial.disconnect();
                }
              }
              
              this.connectMAC(device.id);
              this.pairedDevice = device;
              
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
              this.pairedDevice = null;
            }
          }
        ]
      });
      alert.present();
    }
  }

