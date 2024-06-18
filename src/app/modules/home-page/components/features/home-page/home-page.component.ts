import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

private _router = inject(Router)
title: string = "Bienvenue !"
description: string = "Créé ton repertoire de réalisateurs et de films vus et à voir et ajoute tes commentaires."

goToAllMovies(): void {
  this._router.navigateByUrl("/movies/home/all")
}
}
