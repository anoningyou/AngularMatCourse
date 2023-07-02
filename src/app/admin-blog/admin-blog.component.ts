import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

export interface PeriodicElement {
  id: number;
  title: string;
  image: string;
  published_at: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, title: 'Hydrogen', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: new Date('01.01.2001')},
  {id: 2, title: 'Hydrogen2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: new Date('01.02.2001')},
];

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})

export class AdminBlogComponent {
  displayedColumns: string[] = [ 'id', 'title', 'image', 'published_at', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog){}

  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result)
      this.dataSource = this.dataSource.filter(d => d.id !== id);
    })
  }
}


