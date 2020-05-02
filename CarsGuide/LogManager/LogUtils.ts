import { Log4j } from './LogManager';
export class LogUtils {

    /**
     * Log the debug message in the log file.
     * @param message Debug Message.
     * @param className Name of class.
     */
    public static debugMessage(message: string, className: string) {
        Log4j.Log(className).debug(message);
    }

    /**
     * Log the info message in log file.
     * @param message Info Message
     * @param className Name of class
     */
    public static infoMessage(message: string, className: string) {
        Log4j.Log(className).info(message);
    }

    /**
     * Log the error message in the log file.
     * @param message Error message
     * @param className Name of class
     */
    public static errorMessage(message: string, className: string) {
        Log4j.Log(className).error(message);
    }

    /**
     * Log the fatal message in the Log file.
     * @param message Fatal message
     * @param className Name of class
     */
    public static fatalMessage(message: string, className: string) {
        Log4j.Log(className).fatal(message);
    }
}