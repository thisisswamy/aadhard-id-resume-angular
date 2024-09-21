import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'id-card-portfolio';
  skills:any =[
    "Angular", "React","Java","Spring Boot","SQL","MongoDB","Spring Security"
  ]
  mail ="thudumswamy786@gmail.com"
}
