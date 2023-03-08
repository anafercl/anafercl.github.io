import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void{
    let school1 = {
        fecha : "Aug 2020 - Jun 2024",
        ubicacion : "Monterrey, N.L.",
        estudios : "Ingeniería en Tecnologías Computacionales",
        escuela : "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
    };

    let school2 = {
      fecha : "Aug 2017 - Jun 2020",
      ubicacion : "Mexicali, B.C.",
      estudios : "Bachillerato",
      escuela : "Centro de Enseñanza Técnica y Superior (CETYS)",
  };
    
  this.educationExperience.push(school1);
  this.educationExperience.push(school2);
  }
}
