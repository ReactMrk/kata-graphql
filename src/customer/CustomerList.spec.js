import React from 'react';

const customers = [
  {
    name: 'Bob',
    email: 'bob@sky.uk',
    phone: '77777777777',
    address: 'Watermark'
  }
]

describe('CustomerList', () => {
  describe('Client added alert', () => {
    it.todo('should render an alert with text Welcome to the Client List when displayAlert from hook is true');

    it.todo('should not render an alert with text Welcome to the Client List when displayAlert from hook is false');
  });

  describe('Display client list', () => {
    it.todo('should display context clients');
  });
});