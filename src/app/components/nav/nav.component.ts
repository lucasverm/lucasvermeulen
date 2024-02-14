import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lv-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  public moveWindow(direction: string) {
    console.log('moveWindow: ', direction)
  }
}
