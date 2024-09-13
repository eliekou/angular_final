import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private MatSnackbar:MatSnackBar, private router:Router) { }

  authError(){
    this.MatSnackbar.open("You must be logged in!","OK",{

  duration:5000
    });

    return this.MatSnackbar._openedSnackBarRef?.onAction()
    .pipe(
      tap(_=>this.router.navigate(['/login']))
    )
    .subscribe();
  }
}
