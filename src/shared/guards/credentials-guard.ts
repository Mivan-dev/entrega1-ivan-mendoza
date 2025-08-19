import { CanActivateFn } from '@angular/router';


export const credentialsGuard: CanActivateFn = (route, state) => {

  if(!this.user.loggedUser$){
    return false;
  }


  return true;
};

export const isAdminGuard: CanActivateFn = (route, state) => {
  if (this.user.role === 'admin'){
    return true;
  } else {
    this.router.navigate(['/not-authorized']);
    return false
  }
}