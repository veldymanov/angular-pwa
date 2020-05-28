import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.metaService.addTag({ property: 'og:title', content: 'Facebook Page Title' });
  }

}
