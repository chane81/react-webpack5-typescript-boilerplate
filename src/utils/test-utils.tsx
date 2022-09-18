import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * test utils
 */

interface IProps {
  children: React.ReactNode;
}

const AllTheProviders: React.FC<IProps> = ({ children }) => {
  return <Router>{children}</Router>;
};

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
