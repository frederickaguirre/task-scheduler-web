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
          console.log('Tarea enviada con éxito:', response);
          // Aquí puedes manejar la respuesta de la API según lo necesites
        },
        error => {
          console.error('Error al enviar la tarea:', error);
          // Aquí puedes manejar el error según lo necesites
        }
      );
    } else {
      console.error('El formulario es inválido. Por favor, complete todos los campos.');
    }
  }
}