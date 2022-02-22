import { Component } from '@angular/core';
import { IContractor } from 'src/app/interfaces/contractors.interface';
import { contractorsDataMock } from './_mocks/contractors-data.mock';

@Component({
  selector: 'ontop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  client: string;
  contractors: IContractor[];

  constructor() {
    this.client = 'Super Client';
    this.contractors = contractorsDataMock;
  }
}