import {Component, OnDestroy, OnInit} from '@angular/core';
import {Exercice} from '../../models/Exercice';
import {TrainingService} from '../../services/training.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {


  exercices: Exercice[];
  exercicesSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    // this.exercices = this.trainingService.getAvailableExercices();
    this.exercicesSubscription = this.trainingService.exercicesChanged.subscribe(
      exercices => (this.exercices = exercices)
    );
    this.trainingService.getAvailableExercices();

  }

  onStartTraining(form: NgForm) {
    // this.trainingStart.emit();
    this.trainingService.startExerice(form.value.exercice);
  }

  ngOnDestroy(): void {
    this.exercicesSubscription.unsubscribe();
  }

}
