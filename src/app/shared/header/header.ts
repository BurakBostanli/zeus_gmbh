import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private location: Location) {}

  back() {
    this.location.back();
  }
}
