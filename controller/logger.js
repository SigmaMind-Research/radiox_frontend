const {createLogger, format, transports} = require("winston");

const logger = createLogger({
    format: format.combine(
         format.colorize(),
         format.json(),
         format.simple(),
     //     format.prettyPrint(),
       ),
       transports: [new transports.Console()],
  });
  
  module.exports = logger;