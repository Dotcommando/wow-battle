import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { NAMES } from '../models';
import { selectPlayerCharacter } from '../store/parties/parties.selectors';
import { toggleCharacters } from '../store/parties/parties.actions';


@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit, OnDestroy {

    public names = NAMES;

    public form: FormGroup = new FormGroup({
        roundDuration: new FormControl(),
    });

    public playerCharacter$ = this.store.pipe(
        select(selectPlayerCharacter)
    );

    public playerCharacterName: NAMES;

    private destroy$ = new Subject<void>();

    constructor(
        private store: Store,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.playerCharacter$
            .pipe(
                tap(char => console.log('player', char)),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
    }

    public updatePlayerCharacter(name: NAMES): void {
        if (name !== this.playerCharacterName) {
            this.store.dispatch(toggleCharacters());
        }
        this.playerCharacterName = name;
    }

    public navigateToBattle(): void {
        this.router.navigate([ 'battle' ]);
    }

}
