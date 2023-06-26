import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/models';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})

export class DesignComponent implements OnInit {

  public area: string = 'design';

  constructor() { }

  ngOnInit(): void { }


}
