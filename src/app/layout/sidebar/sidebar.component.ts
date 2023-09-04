import {Component, OnInit} from '@angular/core';
import {navItems} from "./_nav";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public navItems = navItems;
  public sidebarMinimized = true;
  ngOnInit(): void {
  }

}
