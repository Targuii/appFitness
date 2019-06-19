import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Exercice} from '../../models/Exercice';
import {TrainingService} from '../../services/training.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];

  dataSource = new MatTableDataSource<Exercice>();

  private exerciceChangedSubscription: Subscription;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    // this.dataSource.data = this.trainingService.getCompletedOrCanceled();

    this.exerciceChangedSubscription = this.trainingService.finishedExercicesChanged.subscribe((
      exercices: Exercice[]) => {
      this.dataSource.data = exercices;
      }
    );
    this.trainingService.getCompletedOrCanceled();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  ngOnDestroy(): void {
    this.exerciceChangedSubscription.unsubscribe();
  }

}
