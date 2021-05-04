import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-empleados",
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

    public nuero_empleados: number = 1; 

    constructor() {

    }

    ngOnInit(): void {
    }

    actualizarEmpleados(value: string){
        this.nuero_empleados = Number(value);
    }
}