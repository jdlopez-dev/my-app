import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-empleados",
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

    public nuero_empleados: number = 1; 
    notaInformativa: string = "Bienvenidos";
    enableInputEmpleados = true;
    checkedCheckBox = false;
    textoDeRegistro = "no hay nadie registrado";

    constructor() { 

    }

    ngOnInit(): void {
    }

    setActivarCajaEmpleados(event: Event){
        this.checkedCheckBox = (<HTMLInputElement>event.target).checked;
        this.enableInputEmpleados = this.checkedCheckBox ? false : true;
    }

    cambiarNotaInformativa(event: Event){
        this.notaInformativa = (<HTMLInputElement>event.target).value;
    }

    actualizarEmpleados(value: string){
        let numEmpleados = Number(value);
        if(numEmpleados < 0){
            alert("numero no valido");
        }else{
            this.nuero_empleados = numEmpleados;
        }
    }
}