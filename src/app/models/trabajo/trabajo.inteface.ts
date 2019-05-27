import { Cliente } from '../cliente/cliente.inteface';
import { Servicio } from '../servicio/servicio.iteface';

export interface Trabajo {
    key?: string;
    cliente: Cliente;
    servicio: Servicio;
    estado: string;
    fechaInicio: any;
    fechaFin: any;
}