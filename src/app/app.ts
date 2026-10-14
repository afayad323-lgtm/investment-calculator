import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { FormsModule } from '@angular/forms';
import { investmentInput } from './user-input/investment-input.model';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  imports: [RouterOutlet, Header, UserInput, InvestmentResults],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('investment-calculator');
}
