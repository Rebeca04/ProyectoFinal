import { Categoria } from '../categoria/categoria.inteface';
import { Proveedor } from '../proveedor/proveedor.inteface';

export interface Material {
    key?: string;
    nombre: string;
    descripcion: string;
    precio: string;
    stock: number;
    categoria: Categoria;
    proveedor: Proveedor;
}