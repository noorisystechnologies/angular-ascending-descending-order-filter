import { Component, VERSION, OnInit } from '@angular/core';
import { OrderByPipePipe } from './order-by-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sort Data' + ' Angular' + VERSION.full;

  data = [
    { "name": "Alice", "age": "25" },
    { "name": "Bob", "age": "30" },
    { "name": "Charlie", "age": "22" },
    { "name": "David", "age": "35" },
    { "name": "Eve", "age": "28" }
  ];

  constructor(private sortPipe: OrderByPipePipe) { }

  ngOnInit(): void {
    const data = [
      { "name": "Alice", "age": "25" },
      { "name": "Bob", "age": "30" },
      { "name": "Charlie", "age": "22" },
      { "name": "David", "age": "35" },
      { "name": "Eve", "age": "28" }
    ];

    const sortedArr = this.sortPipe.transform(data, "desc", "name");

    console.log(JSON.stringify(sortedArr))
  }

  // Function to toggle sorting order
  toggleSortOrder() {
    this.data.reverse(); // Reverse the data array
  }
}
