import { Component, Input } from '@angular/core';
import { IContractor } from '../../interfaces/contractors.interface';

@Component({
  selector: 'ontop-contractors-table',
  templateUrl: './contractors-table.component.html',
  styleUrls: ['./contractors-table.component.scss']
})
export class ContractorsTableComponent {
  @Input() contractorsData: IContractor[] = [];

  tableTitles: string[] = []

  constructor() {
    this.tableTitles = [
      'Contractor name',
      'Type',
      'Start date',
      'Amount',
      'Status',
      'Actions',
    ];
  }
}