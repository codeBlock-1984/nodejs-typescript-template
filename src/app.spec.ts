import appLoader from './app';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import express from 'express';

jest.mock('./loaders', () => jest.fn()
  .mockImplementation(() => ({
    init: jest.fn(),
  }))
);

jest.mock('express', () => {
  const exp = {
    get: jest.fn(),
  };
  return jest.fn(() => exp);
});

describe('app', () => {
  test('appLoader', async () => {
    const data = await appLoader();
    // expect(e).toBeCalledTimes(1);
    expect(data).toBeDefined();
  });
});
