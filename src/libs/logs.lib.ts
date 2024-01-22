import { Service } from 'typedi';

@Service()
export class Logs {

    constructor() {
    }

    public raw(message: any) {
      console.log(message);
    }

    public log(message: any) {
      if(typeof message === 'object') {
        console.debug('\x1b[32mlog:\x1b[0m');
        console.debug(message);
        return;
      }
      console.info(`\x1b[32mlog:\x1b[0m ${message}`);
    }

    public info(message: any) {
      if(typeof message === 'object') {
        console.debug('\x1b[34minfo:\x1b[0m');
        console.debug(message);
        return;
      }
      console.info(`\x1b[34minfo:\x1b[0m ${message}`);
    }

    public error(message: any) {
        // 'error' word in red
        if(typeof message === 'object') {
          console.debug('\x1b[31merror:\x1b[0m');
          console.debug(message);
          return;
        }
        console.error(`\x1b[31merror:\x1b[0m ${message}`);
    }
    
    public warn(message: any) {
        // 'warn' word in yellow
        if(typeof message === 'object') {
          console.debug('\x1b[33mwarn:\x1b[0m');
          console.debug(message);
          return;
        }
        console.warn(`\x1b[33mwarn:\x1b[0m ${message}`);
    }

    public debug(message: any) {
        // 'debug' word in purple
        if(typeof message === 'object') {
            console.debug('\x1b[35mdebug:\x1b[0m');
            console.debug(message);
            return;
        }
        console.debug(`\x1b[35mdebug:\x1b[0m ${message}`);
    }

    

}