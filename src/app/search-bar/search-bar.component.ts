import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RandomusersService } from '../randomusers.service';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from '../random.data.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchBarComponent {

  constructor(private service: RandomusersService) { }

  @Input()searchData = new MatTableDataSource<Result>();
  @Output() search = new EventEmitter<Result[]>();
  filterKey: string = "";

  emitFilteredValue() {
    this.searchData.filter = this.filterKey.trim().toLowerCase();  
    this.search.emit(this.searchData.filteredData)
  }
}