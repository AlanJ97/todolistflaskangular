import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Task } from './task'

@Injectable()
export class TasksService {
    constructor(private http: HttpClient) { }

    getTasks (): Observable<Task[]> {
        return this.http.get<Task[]>('http://127.0.0.1:5000/api/tasks')
    }

    addTask (task: Task): Observable<Task> {
        console.log(task)
        return this.http.post<Task>('http://127.0.0.1:5000/api/task', task)
    }

    deleteTask (id: number): Observable<{}> {
        const url = `http://127.0.0.1:5000/api/task/${id}`
        return this.http.delete(url)
    }

    updateTask (task: Task): Observable<{}> {
        const url = `http://127.0.0.1:5000/api/task/${task.id}`
        return this.http.put<Task>(url, task)
    }
}