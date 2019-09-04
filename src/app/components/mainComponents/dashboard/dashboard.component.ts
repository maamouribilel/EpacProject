import { Component, OnInit, ViewChild } from '@angular/core';

// datatable
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'orderId',
    'po',
    'isbn',
    'color',
    'due',
    'qte',
    'duration',
    'imposition',
    'priority',
    'binding'
  ];

  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MatTableDataSource<DataElement>(ELEMENT_DATA);
  selection = new SelectionModel<DataElement>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // translation
    // this.paginator._intl.itemsPerPageLabel = 'My translation for items per page.';
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DataElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.orderId + 1}`;
  }
}

export interface DataElement {
  orderId: number;
  po: string;
  isbn: number;
  color: string;
  due: string;
  qte: number;
  duration: number;
  imposition: string;
  priority: string;
  binding: string;
}

const ELEMENT_DATA: DataElement[] = [
  {
    orderId: 14484,
    po: 'Li54354784',
    isbn: 97827071427,
    color: '1C',
    due: '2019/07/02',
    qte: 150,
    duration: 1.04,
    imposition: '2UP',
    priority: 'Normal',
    binding: 'PB'
  },
  {
    orderId: 2245,
    po: 'Li64355784',
    isbn: 97827071427,
    color: '1C',
    due: '2019/07/02',
    qte: 150,
    duration: 1.04,
    imposition: '2UP',
    priority: 'Normal',
    binding: 'PB'
  },
  {
    orderId: 3354,
    po: 'Li54354783',
    isbn: 97827071427,
    color: '1C',
    due: '2019/07/02',
    qte: 150,
    duration: 1.04,
    imposition: '2UP',
    priority: 'Normal',
    binding: 'PB'
  },
  {
    orderId: 43648,
    po: 'Li54374784',
    isbn: 97827071427,
    color: '1C',
    due: '2019/07/02',
    qte: 150,
    duration: 1.04,
    imposition: '2UP',
    priority: 'Normal',
    binding: 'PB'
  },
  {
    orderId: 53258,
    po: 'Li54314784',
    isbn: 97827071427,
    color: '1C',
    due: '2019/07/02',
    qte: 150,
    duration: 1.04,
    imposition: '2UP',
    priority: 'Normal',
    binding: 'PB'
  },
  {
    orderId: 6326,
    po: 'Li56354784',
    isbn: 97827071427,
    color: '1C',
    due: '2019/07/02',
    qte: 150,
    duration: 1.04,
    imposition: '2UP',
    priority: 'Normal',
    binding: 'PB'
  }
];
