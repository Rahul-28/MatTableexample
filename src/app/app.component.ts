import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/internal/operators/map';
import { UserData } from './random.data.interface';
import { RandomusersService } from './randomusers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  pageEvent!: PageEvent;
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) page!: MatPaginator;
  displayedColumns = ['firstname', 'secondname', 'gender', 'dob', 'age', 'email', 'country', 'postcode'];
  constructor(private service: RandomusersService) {}
   
  ngOnInit() {
    this.getApi();
  }

  getApi() {
    this.service.getData(1).pipe(map((data: UserData ) => data.results)).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.page;
      console.log(data);
    })
  }

  getFIlteredValue(searchedData : UserData[]) {
    console.log(searchedData);
  }

  onPagination(event: PageEvent) {
    let currentIndex = event.pageIndex;
    currentIndex = currentIndex +1;
    console.log(currentIndex)
    this.service.getData(currentIndex).pipe(map((data: UserData ) => data.results)).subscribe((data: any) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.page;
      console.log(data);
    })
  }
}
