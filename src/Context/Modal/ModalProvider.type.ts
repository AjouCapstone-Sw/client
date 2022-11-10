/* eslint-disable no-unused-vars */
import React from 'react';

export type OpenModal = {
  Component: React.FC;
  props: any;
};

export type ModalDispatch = {
  openModal: (Component: React.FC, props: any) => void;
  closeModal: (Component: React.FC) => void;
};
