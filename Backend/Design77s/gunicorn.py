import os
from multiprocessing import cpu_count

bind = "0.0.0.0:" + os.environ.get("PORT", "8000")
max_requests = 1000
worker_class = "gevent"
workers = cpu_count()
timeout = 600
