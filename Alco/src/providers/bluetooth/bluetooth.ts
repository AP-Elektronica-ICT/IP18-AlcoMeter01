
import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';

@Injectable()
export class BluetoothProvider {
  
  permissions: any[] = ["BLUETOOTH", "BLUETOOTH_ADMIN", "BLUETOOTH_PRIVILEGED"];
  public connectedDevice: any;
  public availableDevices: any[] = [];
  public scanning: Boolean;
  public meting: any;
  //private macAddress = "98:D3:31:FD:2A:CC"; mac adres van bluetoothmodule van Elke
  
  constructor(public bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
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
     
  public async connectMAC(device: any){
    this.bluetoothSerial.connect(device.id).subscribe((rspo)=>{
      console.log("connected to HC-06 device", rspo);
      this.connectedDevice = device;
    }, (error) => {
      console.log("error", error);
    })
  }
      
  public async startScanning(){
    try{
      this.scanning = true;
      var i = 0;
      await this.bluetoothSerial.setDeviceDiscoveredListener().forEach(
        device => {
          console.log(device.id);
          this.availableDevices[i] = device;
          console.log("unpaired devices: " + this.availableDevices[i].name);
          i++;
    });
      this.bluetoothSerial.discoverUnpaired();
    }catch(error){
      const alert = this.alertCtrl.create({
        message: error + " -> Bluetooth Not Available",
        buttons: [{text: 'Ok', role: 'cancel'}]
      });
      alert.present();
    }
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
            if(this.connectedDevice != null){
              if(device.id == this.connectedDevice.id) {
                this.bluetoothSerial.disconnect();
              }
            }
                
            this.connectMAC(device);                
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
            this.connectedDevice = null;
          }
        }
      ]
      });
      alert.present();
    }
  
   public receiveData(){
    this.bluetoothSerial.readUntil(";").then(data => { console.log(this.meting);this.meting = data; });
  }
}

