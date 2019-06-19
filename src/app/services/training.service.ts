import {Injectable} from '@angular/core';
import {Exercice} from '../models/Exercice';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()

export class TrainingService {

  exerciceChanged = new Subject<Exercice>();
  exercicesChanged = new Subject<Exercice[]>();

  private availableExercices: Exercice[] = [];

  private runningExercice: Exercice;

  finishedExercicesChanged = new Subject<Exercice[]>();


  constructor(private db: AngularFirestore) {}

  getAvailableExercices() {
    this.db.collection('availableExercices')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(
            doc => {return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            } as Exercice;
            }
          );
        }))
      .subscribe((exercices: Exercice[]) => {
        this.availableExercices = exercices;
        this.exercicesChanged.next([...this.availableExercices]);
      })
    ;
  }

  startExerice(selectedId: string) {
    this.runningExercice = this.availableExercices.find(
      ex => ex.id === selectedId
    );

    this.exerciceChanged.next({...this.runningExercice});
  }

  getRunningExercice() {
    return {...this.runningExercice};
  }

  completeExercice() {
    this.addDataToDatabase(
      {
        ...this.runningExercice,
        date: new Date(),
        state: 'completed'
      });
    this.runningExercice = null;
    this.exerciceChanged.next();
  }

  cancelExercice(progress: number) {
    this.addDataToDatabase(
      {
        ...this.runningExercice,
        date: new Date(),
        duration: this.runningExercice.duration * (progress / 100),
        calories: this.runningExercice.calories * (progress / 100),
        state: 'canceled'
      });
    this.runningExercice = null;
    this.exerciceChanged.next();
  }

  getCompletedOrCanceled() {
    this.db.collection('finishedExercices')
      .valueChanges().subscribe((exercices: Exercice[]) => {
        this.finishedExercicesChanged.next(exercices);
    });
  }

  private addDataToDatabase(exercice: Exercice) {
    this.db.collection('finishedExercices').add(exercice);
  }

}
