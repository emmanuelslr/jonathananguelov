declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters: {
        event_category?: string;
        event_label?: string;
        custom_parameters?: Record<string, string | number | boolean>;
      }
    ) => void;
  }
}

export {};
