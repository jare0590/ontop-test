import { Component, Input, OnInit } from '@angular/core';
import { StatusEnum } from '../../../enums/StatusEnum';

@Component({
  selector: 'ontop-contractor-status',
  templateUrl: './contractor-status.component.html',
  styleUrls: ['./contractor-status.component.scss']
})
export class ContractorStatusComponent implements OnInit{
  @Input() status: StatusEnum = StatusEnum.ACTIVE

  statusClass: string;

  constructor() {
    this.statusClass = '';
  }

  ngOnInit(): void {
    const indexStatus = Object.values(StatusEnum).indexOf(this.status as StatusEnum);
    
    this.statusClass = `contractor-status__${indexStatus}`;
  }
}