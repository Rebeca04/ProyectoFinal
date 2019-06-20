import { Cliente } from '../cliente/cliente.inteface';
import { Servicio } from '../servicio/servicio.iteface';
import { MaterialServicio } from '../material-servicio/material-servicio.inteface';

export interface Trabajo {
    key?: string;
    cliente: Cliente;
    servicio: any;
    estado: string;
    fechaInicio: any;
    fechaFin: any;
    materiales: any
}