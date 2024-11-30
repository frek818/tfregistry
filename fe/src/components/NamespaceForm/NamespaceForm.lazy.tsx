import React, { lazy, Suspense } from 'react';

const LazyNamespaceForm = lazy(() => import('./NamespaceForm'));

const NamespaceForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNamespaceForm {...props} />
  </Suspense>
);

export default NamespaceForm;
