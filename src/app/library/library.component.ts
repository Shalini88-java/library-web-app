import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraries = [] as any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetLibraryRequest().subscribe((data: any[])=>{
      console.log(data);
      this.libraries = data;
    });
  }

}
