import { configure, getLogger, Logger } from 'log4js';
let fileName: string = "CarsGuide.log"
export class Log4j {

    public static Log(className: string): Logger {
        configure({
            "appenders": {
                ConsoleAppender: {
                    type: "console",
                },
                FileAppender: {
                    type: "file",
                    filename: fileName,
                    maxLogSize: 10240,
                    backups: 3,
                    pattern: "%d{dd/MM hh:mm}"
                }
            },
            categories: {
                default: { "appenders": ["ConsoleAppender", "FileAppender"], "level": "DEBUG" },
                file: { "appenders": ["FileAppender"], "level": "DEBUG" }
            }
        });
        let logger: Logger = getLogger(className);
        return logger;
    }
}