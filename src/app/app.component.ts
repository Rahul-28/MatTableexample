import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/internal/operators/map';
import { Result, UserData } from './random.data.interface';
import { RandomusersService } from './randomusers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  page: number = 0;
  pageEvent!: PageEvent;
  totalRecords: number = 100;
  dataSource = new MatTableDataSource<Result>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns = ['firstname', 'secondname', 'gender', 'dob', 'age', 'email', 'country', 'postcode'];
  
  constructor(private service: RandomusersService) {}
   
  ngOnInit() {
    this.getApi(this.page);
    this.dataSource.paginator = this.paginator; 
  }

  getApi(pagenumber: number): void {
    this.service.getData(pagenumber).pipe(map((data: UserData ) => data.results)).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getFIlteredValue(searchedData : Result[]): void {
    console.log(searchedData);
  }

  onPagination(): void {
    this.getApi(this.paginator.pageIndex+1)
  }
}
