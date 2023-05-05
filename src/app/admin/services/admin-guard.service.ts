/*
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpUtilService } from 'src/app/shared/services/http-util.service';


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private httpUtilService: HttpUtilService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.httpUtilService.obterPerfil() === 'ROLE_ADMIN') {
      return true;
    }

    this.router.navigate(['/funcionario']);
    return false;
  }

}
*/
/* a rotina acima ficou deprected */

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpUtilService } from "src/app/shared/services/http-util.service";


@Injectable({
    providedIn: 'root'
})
export class AdminGuard {

    constructor(
        private httpUtilService: HttpUtilService,
        private router: Router
    ) { }

    // colocar no admin-routing.module.ts
    // canActivate: [ AdminGuard ]
    canActivate(): boolean {
        if (this.httpUtilService.obterPerfil() === 'ROLE_ADMIN') {
            return true;
        }

        this.router.navigate(['/funcionario']);
        return false;
    }

}