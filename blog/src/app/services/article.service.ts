import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ArticlePg } from '../models/article-pg';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) { }
  public loading:boolean=true;
  private apiUrl:string="https://localhost:44325/api/Articles";


  getArticles(page:number,pageSize:number){
    let api=`${this.apiUrl}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(tap(x=>
      {
        this.loading=false;
      }));
  }
getArticle(id:number){
  let api =`${this.apiUrl}/${id}`;
  return this.httpClient.get<Article>(api).pipe(tap(x=>{
    this.loading=false;
  }))
}

}
