import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {TrainingService} from '../services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  ongoingTraining: boolean;
  exerciceSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    // this.ongoingTraining = false;
    this.exerciceSubscription = this.trainingService.exerciceChanged.subscribe(
      exercice => {
        if (exercice) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
      }
    );
  }
}
