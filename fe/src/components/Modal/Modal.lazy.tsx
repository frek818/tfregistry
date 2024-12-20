import React, { lazy, Suspense } from 'react';

const LazyModal = lazy(() => import('./Modal'));

const Modal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyModal {...props} title="Hello" />
  </Suspense>
);

export default Modal;
