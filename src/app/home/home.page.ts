import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

ionViewDidEnter() {
  setTimeout(async () => {
  await this.createMap();
    }, 500);
 }

@ViewChild('map') public mapEl: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  private async createMap(): Promise<void>{
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapEl.nativeElement,
      apiKey: environment.keys.googleMaps,
      config: {
        center: {
          lat: 4.730232,
          lng: -74.065981
        },
        zoom: 10,
      },
    });
  }


}
