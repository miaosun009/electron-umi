import React, { CElement } from 'react';
import { RecoilRoot } from 'recoil';

export function rootContainer(container: CElement<{}, any>) {
  return React.createElement(RecoilRoot, null, container);
}
