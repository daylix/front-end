'use client';

import { useEffect, useState } from "react";

interface ClientWrapperProps<P extends object, D> {
  Component: React.ComponentType<P & { initialData?: D }>;
  props: P;
  getInitialData?: (props: P) => Promise<D> | D;
  loading?: React.ComponentType;
  errorBoundary?: React.ComponentType<{ error: Error }>;
}

export function ClientWrapper<P extends object, D>({
  Component,
  props,
  getInitialData,
  loading: Loading,
  errorBoundary: ErrorBoundary
}: ClientWrapperProps<P, D>) {
  const [initialData, setInitialData] = useState<D | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (getInitialData) {
        try {
          const data = await getInitialData(props);
          setInitialData(data);
        } catch (e) {
          setError(e as Error);
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, [getInitialData, props]);

  if (error && ErrorBoundary) {
    return <ErrorBoundary error={error} />;
  }

  if (isLoading && Loading) {
    return <Loading />;
  }

  return <Component {...props} initialData={initialData} />;
}