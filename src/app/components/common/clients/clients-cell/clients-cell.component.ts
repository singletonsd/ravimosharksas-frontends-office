import { Component, Input, OnInit } from '@angular/core';
import { Clients } from '@ravimosharksas/apis-contract-libs-typescript';

@Component({
  selector: 'app-clients-cell',
  templateUrl: './clients-cell.component.html',
  styleUrls: ['./clients-cell.component.scss']
})
export class ClientsCellComponent implements OnInit {

  @Input() client: Clients;
  @Input() refClient: String;

  @Input() withName: Boolean = false;

  ngOnInit(): void {
  }

}
