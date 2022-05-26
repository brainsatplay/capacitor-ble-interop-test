import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.brainsatplay.bletest',
  appName: 'tinybuildapp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    "BluetoothLe":{
      "displayStrings": {
        "scanning":"Scanning BLE...",
        "cancel":"Cancelled scan.",
        "availableDevices":"Devices available!",
        "noDeviceFound": "No BLE devices found."
      }
    }
  }
};

export default config;
