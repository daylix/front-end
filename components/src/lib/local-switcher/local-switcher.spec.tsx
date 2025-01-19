import { render } from '@testing-library/react';

import LocalSwitcher from './local-switcher';

describe('LocalSwitcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LocalSwitcher />);
    expect(baseElement).toBeTruthy();
  });
});
