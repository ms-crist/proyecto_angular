import { Pipe } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe {
  fechaHoy: number = Date.now();

}


