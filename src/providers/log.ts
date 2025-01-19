const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  },
  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
  },
};

type ValueOf<T> = T[keyof T];

const LEVEL_COLOR: Record<Level, ValueOf<typeof COLORS.fg>> = {
  info: COLORS.fg.green,
  warn: COLORS.fg.yellow,
  debug: COLORS.fg.blue,
  error: COLORS.fg.red,
};

type Level = 'info' | 'debug' | 'warn' | 'error';

type Log = {
  message: string;
  meta?: Record<string, unknown>;
};

class ProviderLog {
  private log_tag: string;

  constructor(log_tag: string) {
    this.log_tag = log_tag;
  }

  private log({ level, message, meta }: Log & { level: Level }) {
    const timestamp = new Date().toISOString();
    const color = LEVEL_COLOR[level];
    const formattedMessage = `${color}[${this.log_tag}] [${timestamp}] [${level.toUpperCase()}]${COLORS.reset} ${message}`;

    if (meta) return console.log(formattedMessage, meta);
    return console.log(formattedMessage);
  }

  info(message: Log['message'], meta?: Log['meta']) {
    this.log({ level: 'info', message, meta });
  }

  warn(message: Log['message'], meta?: Log['meta']) {
    this.log({ level: 'warn', message, meta });
  }

  debug(message: Log['message'], meta?: Log['meta']) {
    this.log({ level: 'debug', message, meta });
  }

  error(message: Log['message'], meta?: Log['meta']) {
    this.log({ level: 'error', message, meta });
  }

}

export { ProviderLog };
