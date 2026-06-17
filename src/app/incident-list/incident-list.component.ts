import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit{

  constructor(private http:HttpClient, private router:Router) {}

  incidents: any[] = [];
  displayedColumns: string[] = ['id', 'title', 'priority', 'status', 'assignedTeam'];

  ngOnInit() {

    console.log("Component Loaded");

    const token=localStorage.getItem("token");

    if(token!=null) {
      this.http.get<any[]>("http://localhost:8080/api/incidents", {
        headers: {
          "Authorization": "Bearer " + token
        }
      }).subscribe(response => this.incidents=response);

    }else this.router.navigate(["/login"]);


  }

  onRowClick(row: any){
    this.router.navigate(["/incidents/" + row.id]);
  }


}
