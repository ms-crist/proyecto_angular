export class TareaPendiente {

  public nombre: string;
  public fecha: Date;
  public terminada: boolean;
  public lugar: string;
  public descripcion: string;
  day: any;




  constructor(nombre: string, fecha: Date, lugar: string, descripcion: string, terminada?: boolean) {
    this.terminada = terminada ? terminada : false;
    this.nombre = nombre;
    this.fecha = fecha;
    this.lugar = lugar;
    this.descripcion = descripcion;

  }


}




















