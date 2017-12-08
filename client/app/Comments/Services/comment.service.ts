/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment }           from '../Model/comment';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
    // private instance variable to hold base url
    private commentsUrl = 'http://localhost:3000/api/comments';
    // private commentsUrl = 'http://578f454de2fa491100415d08.mockapi.io/api/Comment';
    // Resolve HTTP using the constructor
     constructor (private http: HttpClient) {}

     // Fetch all existing comments
     getComments() : Observable<Comment[]>{
         // ...using get request
         return this.http.get(this.commentsUrl)
                        // ...now we return data
                         .map(res => res )
                         // ...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     // Add a new comment
    addComment (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        return this.http.post(this.commentsUrl, bodyString, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'), // adding headers to request
        }) // ...using post request
                         .map(res => res ) // ...now we return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    // Update a comment
    updateComment (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        return this.http.put(`${this.commentsUrl}/${body['id']}`, bodyString ,{
            headers: new HttpHeaders().set('Content-Type', 'application/json'), // adding headers to request            
        }) // ...using put request
                         .map(res => res ) // ...now we return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }
    // Delete a comment
    removeComment (id:string): Observable<Comment[]> {
        return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
                         .map(res => res ) // ...now we return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }
}
