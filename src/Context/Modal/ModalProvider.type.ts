/* eslint-disable no-unused-vars */
import React from 'react';

export type OpenModal<T> = {
  Component: React.FC<T>;
  props: T;
};

export type ModalDispatch = {
  openModal: (Component: React.FC, props: any) => void;
  closeModal: (Component: React.FC) => void;
};
