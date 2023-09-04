import { Component } from '@angular/core';

@Component({
  selector: 'app-a-sidebar',
  templateUrl: './a-sidebar.component.html',
  styleUrls: ['./a-sidebar.component.css']
})
export class ASidebarComponent {

  visible = false;
  constructor() {
  }

  toggleASideBar(): void {
    this.visible = !this.visible;
  }

}
