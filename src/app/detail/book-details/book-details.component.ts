import { BookService } from '../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/entities/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookdetailsComponent implements OnInit {
  bookId: number = 0;
  book: Book = new Book(0, 'Uusi', 'Kirja');

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = params['id']; // We need the book id, to be able to find the correct book
      
      if (this.bookId) {
        this.book = this.bookService.get(this.bookId);
      }
    });
  }
}
