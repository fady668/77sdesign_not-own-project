FROM python:3.11.1-slim-buster

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1


RUN pip3 install pipenv



ARG WORK_DIR=/app

WORKDIR ${WORK_DIR}
COPY ./run /run

EXPOSE 8000

COPY Pipfile Pipfile.lock ./

RUN pipenv install --system --deploy --dev

COPY ./bin/entrypoint /entrypoint
COPY ./bin/start /start
COPY ./bin/start_celery /start_celery
COPY ./bin/start_channel_workers /start_channel_workers

RUN chmod +x /entrypoint
RUN chmod +x /start
RUN chmod +x /start_celery
RUN chmod +x /start_channel_workers

COPY ./src ${WORK_DIR}

ENTRYPOINT ["/entrypoint"]
