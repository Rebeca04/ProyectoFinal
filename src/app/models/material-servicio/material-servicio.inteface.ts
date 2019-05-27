import { Material } from '../material/material.inteface';
import { Servicio } from '../servicio/servicio.iteface';

export interface MaterialServicio {
    key?: string;
    cantidad: number;
    material: Material;
    servicio: Servicio;
}