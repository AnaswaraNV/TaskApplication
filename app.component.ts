import { Component, Inject, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // notes: Note[] = [
  //   {
  //     id: 1,
  //     title: 'Mock Title',
  //     body: 'mock body',
  //     color: '#ff0000',
  //     favourite: true
  //   }
  // ];

  notes: Note[] = [];
  selected: Note | {};


  constructor(public noteService: NotesService) {

  }

  ngOnInit() {
    this.loadNotes();
  }

  getNotes() {
    return this.notes;
  }

  private loadNotes(): void {
    // TODO: Retrieve a list of notes from the service and store them locally
    this.notes = this.noteService.getNotes();
  }

  selectNote(note) {
    // TODO: prevent changing original object
    this.selected = Object.assign({}, note);
  }

  newNote() {
    this.selected =  {
          id: '',
          title: '',
          body: '',
          color: '',
          favourite: false
        };
  }

  saveNote(note) {
    // TODO: save note
    this.noteService.saveNote(note);
    this.notes = this.noteService.getNotes();
  }

}
