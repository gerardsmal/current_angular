import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  console.log("authAdminGuard:" + authService.isRoleAdmin());
  return authService.isRoleAdmin();
};
