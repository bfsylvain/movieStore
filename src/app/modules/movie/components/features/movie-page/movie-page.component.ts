import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../../shared/services/movie/movie.service';
import { MovieDTO } from '../../../../shared/models/types/movie-DTO.type';
import { Location } from '@angular/common';
import { Comment } from '../../../../shared/models/types/comment.type';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _movieService = inject(MovieService);
  private _router = inject(Router);
  private _location = inject(Location);
  private _id!: number;
  public movie!: MovieDTO;
  public isCommentAreaVisible: boolean = false;

  personalComment: Comment = {
    isSeen: false,
    comment:""

  }

  ngOnInit(): void {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._movieService
      .getMovieById(this._id)
      .subscribe((movie: MovieDTO) => (this.movie = movie));
  }

  goToDirectorPage(directorId: number) {
    this._router.navigateByUrl(`/directors/director/${directorId}`);
  }

  showCommentArea(): void {
    this.isCommentAreaVisible = !this.isCommentAreaVisible;
  }

  sendComment(): void {
    const commentAndSeen: object = {
      isSeen: true,
      comment: "bravo à toute l'équipe",
    };
    this._movieService
      .commentSeenMovie(this._id, commentAndSeen)
      .subscribe((response) => this._location.back());
  }
}
