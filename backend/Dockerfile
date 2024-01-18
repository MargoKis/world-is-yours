FROM python:3.8

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY store/requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY store /app/
