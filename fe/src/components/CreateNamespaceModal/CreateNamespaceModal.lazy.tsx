import React, { lazy, Suspense } from 'react';

const LazyCreateNamespaceModal = lazy(() => import('./CreateNamespaceModal'));

const CreateNamespaceModal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCreateNamespaceModal {...props} />
  </Suspense>
);

export default CreateNamespaceModal;
