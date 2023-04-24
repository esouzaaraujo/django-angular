import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {
  selected_member = { name: '', surname: ''} ;
  codigo: any;

  constructor(private route: ActivatedRoute, private api:ApiService) {}

  ngOnInit() {
    this.loadMember();
  }

  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    this.codigo = id?.toString();
    console.log(id);

    this.api.getMember(this.codigo?.toString()).subscribe(
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
