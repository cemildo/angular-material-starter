import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  person: any;
  answer: string;
  constructor(private personApi: PersonService) { }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    this.personApi.getPerson()
    .subscribe(data => this.person = data.results[0]);
  }

}
