import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void{
    let work1 = {
        fecha : "Feb 2022 - Jun 2022",
        ubicacion : "Monterrey, N.L.",
        puesto : "Vice Presidenta",
        empresa : "Sociedad de Alumnos de Ingenieria en Tecnologias Computacionales (SAITC)",
        logros : [
          {descripcion: "Congreso IT World con conferencias de empresas líderes en la industria, entre ellas: Meta, PlayStation, Dell, Datadog, Luxoft, Atos, Spectra y Schneider Electric."},
          {descripcion: "Representar alumnos de la carrera ITC y administrar el consejo estudiantil, conformado por 6 departamentos."}
        ]
    };

    let work2 = {
      fecha : "Feb 2022 - Jun 2022",
      ubicacion : "Monterrey, N.L.",
      puesto : "Coordinadora",
      empresa : "Women in Technology (WIT)",
      logros : [
        {descripcion: "Entrevistar y capacitar a un equipo de 17 instructores."},
        {descripcion: "Preparar talleres para 42 alumnas, principiantes y avanzadas, con el objetivo de reducir la brecha de género en la industria tecnológica."}
      ]
  };

    let work3 = {
      fecha : "Jun 2021 - Jul 2022",
      ubicacion : "Monterrey, N.L.",
      puesto : "Instructora",
      empresa : "Consejo de Software de Nuevo León (Csoftmty)",
      logros : [
        {descripcion: "Curso intensivo de verano para alumnos desde primaria hasta preparatoria."},
        {descripcion: "Talleres para 42 alumnas, principiantes y avanzadas"}
      ]
  };
    
  this.workExperience.push(work1);
  this.workExperience.push(work2);
  this.workExperience.push(work3);
  }
}
