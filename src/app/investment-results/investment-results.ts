import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input } from '@angular/core';
import { investmentService } from '../investment-service';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-investment-results',
  styleUrl: './investment-results.css',
  templateUrl: './investment-results.html',
})
export class InvestmentResults {
  private investmentService = inject(investmentService);

  // results = computed(() => this.investmentService.resultsData());

  results = this.investmentService.resultsData.asReadonly();
}
