@Component({
  selector: 'app-user-list',
  template: `
    <div *ngIf="users">
      <div *ngFor="let user of users">{{ user.name }}</div>
    </div>
  `
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/users').subscribe(data => this.users = data);
    interval(5000).subscribe(() => this.refresh());
  }

  refresh() {
    this.http.get('/api/users').subscribe(data => this.users = data);
  }
}
