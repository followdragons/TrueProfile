// В файле types.d.ts
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
      };
    }; // Адаптируйте тип в соответствии с вашим использованием
  }
}

export {};
