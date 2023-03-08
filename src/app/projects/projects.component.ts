import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void{
  let project1 = {
    fecha : "Feb 2023 - Jun 2023",
    ubicacion : "Monterrey, N.L.",
    nombre : "HRemedy Chatbot",
    empresa : "Perficient",
    logros : [
      {descripcion: "Diseño y desarrollo de un chatbot para facilitarle a los empleados consultar información relacionada con el departamento de Recursos Humanos."},
      {descripcion: "Implementación en una interfaz web utilizando Angular."},
      {descripcion: "Entrenamiento del chatbot para interpretar lenguaje natural y extraer información del usuario de Azure DevOps y Microsoft Outlook."}
    ]
  };

  let project2 = {
    fecha : "Sep 2022 - Dic 2022",
    ubicacion : "Monterrey, N.L.",
    nombre : "Sistema de inscripciones",
    empresa : "Prepanet",
    logros : [
      {descripcion: "Mejora del sistema de inscripciones para talleres ofrecidos para alumnos de Prepanet."},
      {descripcion: "Diseño y desarrollo de una aplicación móvil en iOS para alumnos utilizando Swift."},
      {descripcion: "Implementación en una interfaz web para alumnos y administradores utilizando React."}
    ]
  };

  let project3 = {
    fecha : "Feb 2022 - Abr 2022",
    ubicacion : "Monterrey, N.L.",
    nombre : "Página Web y Biblioteca Virtual",
    empresa : "Pastoral Hermano Mayor",
    logros : [
      {descripcion: "Mejora de la interfaz y el sitio web de la Pastoral del Hermano Mayor utilizando HTML, CSS y JavaScript."},
      {descripcion: "Implementación de una biblioteca virtual incorporada en el sitio con el uso de Unity WebGL."},
      {descripcion: "Diseño de un dashboard para consultar estadísticas de la información médica de sus miembros."}
    ]
  };

  this.projectsExperience.push(project1);
  this.projectsExperience.push(project2);
  this.projectsExperience.push(project3);
  }

}
