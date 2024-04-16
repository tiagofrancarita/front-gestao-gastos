import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-previsto-mes-atual',
  templateUrl: './previsto-mes-atual.component.html',
  styleUrl: './previsto-mes-atual.component.scss'
})
export class PrevistoMesAtualComponent {

  @Input() valorPrevistoMesAtual: number = 1000;

}
