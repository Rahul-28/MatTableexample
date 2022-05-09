import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RandomusersService } from '../randomusers.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from '../random.data.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private service: RandomusersService) { }

  @Input() SearchData!: MatTableDataSource<UserData>;
  @Output() search = new EventEmitter<UserData[]>();

  ngOnInit(): void {
  }

  applySearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.SearchData.filter = filterValue.trim().toLowerCase();
    this.search.emit(this.SearchData.filteredData);
  }
}