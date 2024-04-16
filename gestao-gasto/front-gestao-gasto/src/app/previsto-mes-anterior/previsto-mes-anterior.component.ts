import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-previsto-mes-anterior',
  templateUrl: './previsto-mes-anterior.component.html',
  styleUrl: './previsto-mes-anterior.component.scss'
})
export class PrevistoMesAnteriorComponent {

  @Input() valorPrevistoMesAnterior: number = 3000;


}
