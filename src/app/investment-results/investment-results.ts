import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-investment-results',
  styleUrl: './investment-results.css',
  templateUrl: './investment-results.html',
})
export class InvestmentResults {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
