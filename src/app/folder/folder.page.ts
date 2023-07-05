import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { map } from 'rxjs/operators';
import { ArticlesEntity } from '../interfaces/news-response';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  newsList: ArticlesEntity[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsApiService: NewsapiService
  ) {
    this.newsList = [];
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTopHeadLines();
  }

  getTopHeadLines() {
    this.newsApiService
      .getTopCountryHeadlines('us', this.folder)
      .pipe(map((res) => res.articles))
      .subscribe((news) => (this.newsList = news as ArticlesEntity[]));
  }
}
