import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates : Array<any> = [];

  constructor() { }

  ngOnInit(): void{
    let achievement1 = {
        fecha : "Sep 2022",
        ubicacion : "Monterrey, N.L.",
        logro : "Semana Tec: Transformar para Trascender",
        otorga : "Conscious Business Center International (CBC)",
        descripcion : "Diplomado de liderazgo diseñado por Fred Kofman"
    };

    let achievement2 = {
      fecha : "Abr 2019",
      ubicacion : "Mazatlán, Sin.",
      logro : "4to lugar nacional",
      otorga : "Impact Dance Convention",
      descripcion : "Producción de danza contemporánea \"O MUN\" "
    };
    
  this.certificates.push(achievement1);
  this.certificates.push(achievement2);
  }

}
