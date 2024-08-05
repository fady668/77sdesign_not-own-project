import logging


class ColorFormatter(logging.Formatter):
    colors = {
        "WARNING": "\033[93m",
        "ERROR": "\033[91m",
        "DEBUG": "\033[94m",
        "CRITICAL": "\033[95m",
        "INFO": "\033[92m",
    }

    def format(self, record):
        levelname = record.levelname
        msg = logging.Formatter.format(self, record)
        return self.colors.get(levelname, "") + msg + "\033[0m"


logger = logging.getLogger("django")
