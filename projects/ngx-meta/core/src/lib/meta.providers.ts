import { EnvironmentProviders, makeEnvironmentProviders, Provider } from '@angular/core';
import { MetaLoader, MetaStaticLoader } from './meta.loader';
import { MetaService } from './meta.service';

export const metaFactory = () => new MetaStaticLoader();

export function provideEnvironmentMeta(
  configuredProvider: Provider = {
    provide: MetaLoader,
    useFactory: metaFactory,
  },
): EnvironmentProviders {
  return makeEnvironmentProviders([configuredProvider, MetaService]);
}
