import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  @ViewChild('map') mapRef: ElementRef;

  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    const ubicacion = new google.maps.LatLng(4.63,-74.08);
    //Configuracion del mapa
    const parametros = {
      center: ubicacion,
      zoom: 16
    }
    const styles = [
      /*{
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },*/{
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "transit",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }/*,{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }*/
    ]
    
    this.map = new google.maps.Map(this.mapRef.nativeElement,parametros);
    this.map.set('styles',styles);
  }

}
