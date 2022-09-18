// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

/** getByTestId 호출시 컴포넌트 및 엘리먼트의 id를 사용하기위한 setup */
configure({ testIdAttribute: 'id' });
