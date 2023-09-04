import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {User} from "../../shared/services/user";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  showSideBar = false;
  hideASideBar = true;

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(public authService: AuthService, private elementRef: ElementRef, private renderer: Renderer2) {

    this.currentUser = JSON.parse(localStorage.getItem('user')!);
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
    const body = this.elementRef.nativeElement.ownerDocument.body;
    if (this.showSideBar) {
      this.renderer.removeClass(body, 'sidebar-lg-show');
    } else {
      this.renderer.addClass(body, 'sidebar-lg-show');
    }

  }

  toggleASideBar() {
    this.hideASideBar = !this.hideASideBar;
    const body = this.elementRef.nativeElement.ownerDocument.body;
    if (this.hideASideBar) {
      this.renderer.removeClass(body, 'aside-menu-show');
    } else {
      this.renderer.addClass(body, 'aside-menu-show');
    }

  }

  ngOnInit(): void {
  }


}
