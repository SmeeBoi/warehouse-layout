class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  log(...args: any[]): void {
    /* eslint-disable-next-line no-console */
    if (this.isDevelopment) {
      console.log(...args); // Only log in development
    }
  }

  error(...args: any[]): void {
    /* eslint-disable-next-line no-console */
    if (this.isDevelopment) {
      console.error(...args); // Only log errors in development
    }
  }
}

const logger = new Logger();
export default logger;
