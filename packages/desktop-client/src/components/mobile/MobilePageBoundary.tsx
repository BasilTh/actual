import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router';

import { FeatureErrorFallback } from '#components/FeatureErrorFallback';

export function MobilePageBoundary({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <ErrorBoundary
      FallbackComponent={FeatureErrorFallback}
      resetKeys={[location.pathname]}
    >
      {children}
    </ErrorBoundary>
  );
}
