import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router ,ActivatedRoute} from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() page:number;
  @Input() totalCount:number;
  @Input() articles:Article[];
  @Input() pageSize:number;
  @Input() loadingItem:number;
  default_article:string="assets/article_empty.jpg"
  constructor(private router:Router,private route:ActivatedRoute,public articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.loading=true;
  }

  createRange(){
    var items:number []=[];
    for (var index = 1; index <= this.loadingItem; index++) {
      items.push(index);
    }
    return items;
  }

  pageChanged(event:any){

    this.articleService.loading=true;
    this.page=event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);

  }

}
