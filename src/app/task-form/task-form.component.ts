import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      url: ['', Validators.required],
      cron: ['', Validators.required]
    });
  }
  

  onSubmit() {
    if (this.taskForm.valid) {
      const formData = {
        url: this.taskForm.get('url').value,
        cronSyntax: this.taskForm.get('cron').value
      };

      this.http.post<any>('http://localhost:8080/api/tasks', formData).subscribe(
        response => {
          console.log('Task send:', response);
          alert("Task send");
        },
        error => {
          console.error('Error sending task:', error);
          alert("Error sending task");
        }
      );
    } else {
      console.error('Invalid form.');
    }
  }
}