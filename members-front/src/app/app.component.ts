import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  selected_member = {id: 0, name: '', surname: ''};

  members = [
    {id: 1, name: 'Member 01', surname: 'Ciclano', photo: 'http://www.minhaapp.com/photo01'},
    {id: 2, name: 'Member 02', surname: 'Beltrano', photo: 'http://www.minhaapp.com/photo02'},
    {id: 3, name: 'Member 03', surname: 'Franciscano', photo: 'http://www.minhaapp.com/photo03'},
    {id: 4, name: 'Member 04', surname: 'Deltrano', photo: 'http://www.minhaapp.com/photo04'},
    {id: 5, name: 'Member 05', surname: 'Fulano', photo: 'http://www.minhaapp.com/photo05'},
  ];

  constructor(private api:ApiService) {
    this.getMembers();
  }
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {this.members = data
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  };

  memberClicked = (id: number) => {
    this.api.getMember(id).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  };
}
