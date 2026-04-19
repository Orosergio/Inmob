# University Inmob Recovery

This project is an Express + EJS + MariaDB real-estate rental management app.

## What the project does

- Manages users with administrator and normal-user roles.
- Lets administrators manage `inmuebles`, `apartamentos` (`nivel`), and `habitaciones`.
- Publishes rental `anuncios` and creates `reservaciones` in `alquiler`.
- Tracks payment slips in `controlalquiler`.

## Why this recovery uses MariaDB

This repository already includes a MariaDB/MySQL SQL dump in `../inmobiliaria.sql`, and the application code uses the `mysql` Node driver directly. Docker is not available on this machine, so the lowest-risk recovery is to run a local MariaDB instance and keep the original schema and queries intact.

## Local setup

1. Start MariaDB:
   `npm run db:start`
2. Import the database dump:
   `npm run db:import`
3. Review `.env` if you want to change the local database credentials.
4. Start the app:
   `npm start`
5. Open:
   `http://localhost:8080/login`

## Default local configuration

- Host: `127.0.0.1`
- Port: `3306`
- Database: `inmobiliaria`
- App user: `inmob_app`

## Recovery changes

- Replaced the hardcoded root DB connection with an environment-based pooled connection.
- Moved Passport strategy initialization into the app bootstrap.
- Fixed the registration controller to persist the submitted `estatus` field.
- Added helper scripts to start MariaDB and import the SQL dump on Windows.
