import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap'
import { Result, UserData } from './random.data.interface';
import { RandomusersService } from './randomusers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit ,AfterViewInit{

  page: number = 1;
  pageSize: number = 10;
  totalRecords: number = 1000;
  dataSource = new MatTableDataSource<Result>([]);
  @ViewChild( MatPaginator ) paginator!: MatPaginator;
  displayedColumns = ['firstname', 'secondname', 'gender', 'dob', 'age', 'email', 'country', 'postcode'];
  
  constructor(private service: RandomusersService) {}
   
  ngOnInit() {
    this.getApi(this.page, this.pageSize);
  }

  ngAfterViewInit() {
      this.paginator.page.pipe(
      tap(() => this.onPagination())
    ).subscribe()
  }

  getApi(page: number, size: number): void {
    this.service.getData(page, size).pipe(map((data: UserData ) => data.results)).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  
  getFIlteredValue(searchedData : Result[]): void {
    console.log(searchedData);
  }

  onPagination(): void {
    this.getApi(this.paginator.pageIndex +1, this.paginator.pageSize)
  }
}