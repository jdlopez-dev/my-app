import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-empleados",
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

    public nuero_empleados: number = 1; 
    enableInputEmpleados = true;
    checkedCheckBox = false;
    textoDeRegistro = "no hay nadie registrado";

    constructor() { 

    }

    ngOnInit(): void {
    }

    setActivarCajaEmpleados(event: Event){
        alert("Se ha activiado la generación de empleados");
        this.checkedCheckBox = (<HTMLInputElement>event.target).checked;

        this.enableInputEmpleados = this.checkedCheckBox ? false : true;
    }

    actualizarEmpleados(value: string){
        this.nuero_empleados = Number(value);
    }
}