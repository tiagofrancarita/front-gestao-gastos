import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-previsto-mes-seguinte',
  templateUrl: './previsto-mes-seguinte.component.html',
  styleUrl: './previsto-mes-seguinte.component.scss'
})
export class PrevistoMesSeguinteComponent {

  @Input() valorPrevistoMesSeguinte: number = 1000;

}
