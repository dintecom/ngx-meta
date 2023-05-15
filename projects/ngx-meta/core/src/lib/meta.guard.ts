import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { MetaService } from './meta.service';
import { MetaRouteSettings } from './models/meta-route-settings';

export function metaGuard(settings?: MetaRouteSettings): CanActivateFn | CanActivateChildFn {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const metaSettings = settings ?? ((route.hasOwnProperty('data') ? route.data['meta'] : undefined) as MetaRouteSettings);

    inject(MetaService).update(state.url, metaSettings);
    return true;
  };
}
