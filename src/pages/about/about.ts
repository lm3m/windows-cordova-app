import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import '@winjs';
//import ExchangeActiveSyncProvisioning = Windows.Security.ExchangeActiveSyncProvisioning;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
declare var currentDeviceInfor: Windows.Security.ExchangeActiveSyncProvisioning.EasClientDeviceInformation;

export class AboutPage {

  constructor(public navCtrl: NavController) {
	  document.getElementById("DeviceInforLaunch").addEventListener("click", this.deviceInfor, false);
    document.getElementById("DeviceInforReset").addEventListener("click", this.deviceInforReset, false);
  }

  deviceInfor() {
        document.getElementById("DeviceID").innerText = currentDeviceInfor.id;
        document.getElementById("OperatingSystem").innerText = currentDeviceInfor.operatingSystem;
        document.getElementById("FriendlyName").innerText = currentDeviceInfor.friendlyName;
        document.getElementById("SystemManufacturer").innerText = currentDeviceInfor.systemManufacturer;
        document.getElementById("SystemProductName").innerText = currentDeviceInfor.systemProductName;
        document.getElementById("SystemSku").innerText = currentDeviceInfor.systemSku;
    }

   deviceInforReset() {
        document.getElementById("DeviceID").innerText = "";
        document.getElementById("OperatingSystem").innerText = "";
        document.getElementById("FriendlyName").innerText = "";
        document.getElementById("SystemManufacturer").innerText = "";
        document.getElementById("SystemProductName").innerText = "";
        document.getElementById("SystemSku").innerText = "";
    }

}
