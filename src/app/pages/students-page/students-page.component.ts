import { Component } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {

  students: Student[] = [
    new Student(1,'Alejandro','Gastiarena',new Date('1999-11-03'), 10),
    new Student(2,'Angel','Garena',new Date('2004-05-16'), 8),
    new Student(3,'Agustin','Arias',new Date('1998-09-17'), 5),
    new Student(4,'Nadia','Arias',new Date('2007-10-14'), 3),
    new Student(5,'Martina','Moyano',new Date('2010-10-02'), 6),
    new Student(6,'Pablo','Montes',new Date('2002-1-19'), 7),
    new Student(7,'Sofia','Montes',new Date('2014-1-26'), 2),
  ]

}
