import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Books } from './Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books = [] as any;
  id$ : string;
 
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.id$ = this.route.snapshot.params.libraryid
   }

  ngOnInit(): void {
    this.dataService.sendGetBooksOfLibraryRequest(this.id$).subscribe((data)=>{
      console.log(data);
      this.books = data;
    });
  }

}
