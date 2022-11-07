/* eslint-disable no-unused-vars */
import React from 'react';

export type OpenModal = {
  Component: React.FC;
  props: any;
};

export type ModalDispatch = {
  open: (Component: React.FC, props: any) => void;
  close: (Component: React.FC) => void;
};
