import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { env } from './environments/entorno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('amplify-demo');
  environment = env;

  ngOnInit(): void {
    console.log('App running on ' + this.environment.name);
  }

}
