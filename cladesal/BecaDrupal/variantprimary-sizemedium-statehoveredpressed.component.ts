import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-variantprimarysizemediumstatehoveredpressed',
  templateUrl: './variantprimarysizemediumstatehoveredpressed.component.html',
  styleUrls: ['./variantprimarysizemediumstatehoveredpressed.component.scss']
})
export class VariantPrimarySizeMediumStateHoveredPressedComponent implements OnInit {
  title = 'Variant=Primary, Size=Medium, State=Hovered/Pressed';
  
  constructor() { }

  ngOnInit(): void { 
    console.log('Angular Component Init - Mapped Props:', {

    });
  }
}