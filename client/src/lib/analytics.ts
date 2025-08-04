// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    return;
  }

  // Create script tag for Google Analytics
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  script.onload = () => {
    window.gtag = window.gtag || function () {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };
    window.gtag("js", new Date().toISOString());
    window.gtag("config", GA_MEASUREMENT_ID);
  };
};

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};