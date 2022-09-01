import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  constructor(private http: HttpClient, private router: Router) {}
  public get(url: string) {
    return this.http.get(url);
  }
  public post(url: string, data: any) {
    return this.http.post(url, data);
  }
  public put(url: string, data: any) {
    return this.http.put(url, data);
  }
  public delete(url: string) {
    return this.http.delete(url);
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
