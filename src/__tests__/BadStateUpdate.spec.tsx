import {
  render,
  cleanup,
  waitFor,
  screen,
  getAllByRole,
  waitForElementToBeRemoved,
  act,
  RenderResult
} from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import BadStateUpdate from '../pages/BadStateUpdate';

describe('<BadStateUpdate />', () => {
  afterEach(cleanup);

  it('BtnSingleInc update', async () => {
    render(<BadStateUpdate />);

    // get single increase btn
    const btnSingleInc = await screen.getByTestId('btnInc');

    // expect - in document
    expect(btnSingleInc).toBeInTheDocument();

    // test click
    await userEvent.click(btnSingleInc);
    await userEvent.click(btnSingleInc);

    const divText = await screen.getByText(/incState?/i);

    expect(divText).toHaveTextContent('incState: 2');
  });

  it('BtnMultiInc update', async () => {
    render(<BadStateUpdate />);

    const btnMultiInc = await screen.getByTestId('btnMultiInc');

    // expect - in document
    expect(btnMultiInc).toBeInTheDocument();

    // test click
    await userEvent.click(btnMultiInc);
    await userEvent.click(btnMultiInc);

    const divText = await screen.getByText(/incState?/i);

    expect(divText).toHaveTextContent('incState: 2');
  });
});
