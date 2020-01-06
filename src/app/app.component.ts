import { Component, OnInit }       from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-questionMain></app-questionMain>
    </div>
  `,
  providers:  []
})
export class AppComponent implements OnInit   {

  

  constructor() {
  }

  ngOnInit(): void {
  
  }
}
