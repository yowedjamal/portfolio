// Types globaux pour le portfolio

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Analytics types
interface AnalyticsEvent {
  event_category: string;
  event_label: string;
  value?: number;
}

export {};
