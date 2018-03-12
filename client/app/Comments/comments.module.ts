import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { CommentBoxComponent } from './Components/comment-box.component';
import { CommentListComponent } from './Components/comment-list.component';
import { CommentFormComponent } from './Components/comment-form.component';
import { CommentComponent } from './Components/index';


import { CommentService } from './Services/comment.service';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ],

  providers: [
      CommentService
  ],

  exports:[
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ]

})
export class CommentModule {
}

