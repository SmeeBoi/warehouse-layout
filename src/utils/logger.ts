import log from 'loglevel';

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  log.setLevel('debug');
} else {
  log.setLevel('warn');
}

export default log;
