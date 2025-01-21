import { render } from '@testing-library/react';

import ClickOutside from './click-outside';

describe('ClickOutside', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClickOutside />);
    expect(baseElement).toBeTruthy();
  });
});
