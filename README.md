
# Angular Custom Sorting Pipe

Angular does not provide a pipe for sorting items. You have to implement it yourself. The best way to sort items is through a pipe.

This is an example Angular application that demonstrates how to create a custom sorting pipe for sorting data in ascending and descending order based on a specified key. 


## Usage

The application demonstrates sorting a list of objects in ascending and descending order by specifying a key. The sorting logic is implemented in a custom sorting pipe named OrderByPipePipe.

In your component, you can use the OrderByPipePipe to sort your data as follows:

```javascript
import { Component, VERSION, OnInit } from '@angular/core';
import { OrderByPipePipe } from './order-by-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Your data array
  data = [
    { "name": "Alice", "age": "25" },
    { "name": "Bob", "age": "30" },
    { "name": "Charlie", "age": "22" },
    { "name": "David", "age": "35" },
    { "name": "Eve", "age": "28" }
  ];

  constructor(private sortPipe: OrderByPipePipe) { }

  ngOnInit(): void {
    // Sort the data in descending order by name
    const sortedArr = this.sortPipe.transform(this.data, "desc", "name");

    console.log(JSON.stringify(sortedArr))
  }
}

}
```

In your HTML template, you can use the sort pipe to sort the data:

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of data | sort:'asc':'name'">
      <td>{{ item.name }}</td>
      <td>{{ item.age }}</td>
    </tr>
  </tbody>
</table>
```

## Custom Sorting pipe

The custom sorting pipe OrderByPipePipe is responsible for sorting the data based on the specified key and order. You can find the implementation in the order-by-pipe.pipe.ts file.

```javascript
import { Pipe, PipeTransform } from '@angular/core';
export type SortOrder = 'asc' | 'desc';

@Pipe({
  name: 'sort'
})
export class OrderByPipePipe implements PipeTransform {

  transform(value: any[], sortOrder: SortOrder | string = 'asc', sortKey?: string): any {
    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

    if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;

    let numberArray = [];
    let stringArray = [];

    if (!sortKey) {
      numberArray = value.filter(item => typeof item === 'number').sort();
      stringArray = value.filter(item => typeof item === 'string').sort();
    } else {
      numberArray = value.filter(item => typeof item[sortKey] === 'number').sort((a, b) => a[sortKey] - b[sortKey]);
      stringArray = value
        .filter(item => typeof item[sortKey] === 'string')
        .sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return -1;
          else if (a[sortKey] > b[sortKey]) return 1;
          else return 0;
        });
    }
    const sorted = numberArray.concat(stringArray);
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }

}

```


