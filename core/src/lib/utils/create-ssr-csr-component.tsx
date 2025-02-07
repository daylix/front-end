import { ClientWrapper } from './client-wrapper';

/**
 * Configuration options for creating a switchable component
 * @template P - The props type that both Client and Server components will receive
 * @template D - The type of data that will be passed from server to client
 */
type SwitchableOptions<P extends object, D = unknown> = {
  /** Client-side component implementation */
  Client: React.ComponentType<P & { initialData?: D }>;
  /** Server-side component implementation */
  Server: React.ComponentType<P & { initialData?: D }>;
  /** Optional loading component to show during client-side hydration */
  loading?: React.ComponentType;
  /** Optional error boundary component to handle runtime errors */
  errorBoundary?: React.ComponentType<{ error: Error }>;
  /**
   * Optional function to extract data from server props to pass to client
   * @param props - Server component props
   * @returns Data to be passed to client component
   */
  getInitialData?: (props: P) => Promise<D> | D;
};

/**
 * Creates a component that can switch between client-side and server-side implementations
 * with support for passing server-fetched data to client component.
 * 
 * @template P - The props type that both Client and Server components will receive
 * @template D - The type of data that will be passed from server to client
 * @param componentName - The name of the component for debugging purposes
 * @param options - Configuration options including Client and Server implementations
 * @returns A React component that renders either the Client or Server implementation
 * 
 * @example
 * ```tsx
 * const MyComponent = createSwitchableComponent("MyComponent", {
 *   Client: ClientImplementation,
 *   Server: ServerImplementation,
 *   loading: LoadingSpinner,
 *   errorBoundary: ErrorFallback,
 *   getInitialData: async (props) => {
 *     // Fetch data on server
 *     return await fetchDataFromServer(props.id);
 *   }
 * });
 * ```
 */
export default function createSwitchableComponent<P extends object, D>(
  componentName: string,
  options: SwitchableOptions<P, D>
) {

  return function SwitchableComponent(props: P) {
    if (typeof window === 'undefined') {
      const ServerComponent = async () => {
        if (!options.getInitialData) {
          return <options.Server {...props} />;
        }

        try {
          const data = await options.getInitialData(props);
          return <options.Server {...props} initialData={data} />;
        } catch (error) {
          if (options.errorBoundary) {
            return <options.errorBoundary error={error as Error} />;
          }
          throw error;
        }
      };

      return ServerComponent();
    }
    
    return (
      <ClientWrapper
        Component={options.Client}
        props={props}
        getInitialData={options.getInitialData}
        loading={options.loading}
        errorBoundary={options.errorBoundary}
      />
    );
  };
}