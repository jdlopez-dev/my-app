import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public empleado!: Empleado;

  @Input()
  IdEmpleado!: number;
  constructor() {
    this.FillEmpleado();
  }

  ngOnInit(): void {
    this.empleado.idEmpleado = this.IdEmpleado;
  }

  private FillEmpleado() {
    this.empleado = new Empleado();
    this.empleado.nombre = "Test Nombre" ?? "Test Nombre sin valor";
    this.empleado.apellido = "Test Apellido"
    this.empleado.edad = Math.floor(Math.random() * 100) + 1;
    this.empleado.empresa = "Test Empresa"
  }
}
