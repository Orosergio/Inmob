# University Inmob Project

University Inmob Project is a rental and property management web application built as a university project. It manages users, properties, apartments, rooms, public listings, reservations, and payment receipts.

The application currently runs as a local `Node.js + Express + EJS + MariaDB` project. The backend app lives in `ProyectoInm`, and the database schema plus seed data live in `inmobiliaria.sql`.

## Project Goals

- Manage two user roles: administrators and normal users.
- Let administrators create and maintain properties (`inmuebles`).
- Let administrators manage apartments (`nivel`) and rooms (`habitacion`) linked to a property.
- Publish rental ads (`anuncios`) for available spaces.
- Create reservation/rental records (`alquiler`).
- Track payment receipts (`controlalquiler`) for active rentals.

## Main Features

- User registration and login with local authentication.
- Session-based access control with Passport.
- Property catalog management.
- Apartment and room management.
- Listing and reservation management.
- Payment receipt upload and tracking.
- Server-rendered views with EJS.

## Tech Stack

- `Node.js`
- `Express`
- `EJS`
- `Passport`
- `MariaDB / MySQL`
- `Multer` for file uploads

## Repository Structure

- `ProyectoInm/`
  Express application.
- `ProyectoInm/controllers/`
  Route handlers for login, registration, properties, listings, payments, apartments, and rooms.
- `ProyectoInm/model/`
  SQL query layer.
- `ProyectoInm/routes/`
  Express routes.
- `ProyectoInm/views/`
  EJS pages.
- `ProyectoInm/public/`
  Stylesheets and uploaded images.
- `ProyectoInm/config/conexion.js`
  Database connection pool.
- `ProyectoInm/.env`
  Local runtime configuration.
- `ProyectoInm/scripts/start-mariadb.ps1`
  Starts MariaDB locally on Windows if it is not already running.
- `ProyectoInm/scripts/import-db.ps1`
  Recreates and imports the project database from the SQL dump.
- `inmobiliaria.sql`
  Database schema and seed data.

## Current Local Setup

The project was recovered to run locally with MariaDB.

- App URL: `http://localhost:8080/login`
- Database host: `127.0.0.1`
- Database port: `3306`
- Database name: `inmobiliaria`
- App database user: `inmob_app`

## Prerequisites

- Windows
- `Node.js`
- `npm`
- `MariaDB 12.2`

## First-Time Setup

Run all commands from `Inmob/ProyectoInm`.

1. Install dependencies:
   `npm install`
2. Start MariaDB:
   `npm run db:start`
3. Import the database:
   `npm run db:import`
4. Start the application:
   `npm start`
5. Open:
   `http://localhost:8080/login`

## Daily Run

If the machine was restarted, run:

1. `npm run db:start`
2. `npm start`

If you need a clean database reset, run:

1. `npm run db:import`

That import script drops and recreates the `inmobiliaria` database before loading `inmobiliaria.sql`.

## Local Environment File

The recovered app uses `ProyectoInm/.env`.

Default values:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=inmob_app
DB_PASSWORD=InmobApp2026!
DB_NAME=inmobiliaria
DB_CONNECTION_LIMIT=10
SESSION_SECRET=UniversityInmobRecovery2026
PORT=8080
```

There is also a template at `ProyectoInm/.env.example`.

## Test Access

The recovery includes a verified local account created during smoke testing:

- Email: `local.recovery@inmob.test`
- Password: `Recover2026!`

This account was used to confirm that:

- registration works
- login works
- session redirects work
- the main authenticated landing page loads

## Recovery Changes Applied

- Replaced the hardcoded root database connection with an environment-based connection pool.
- Centralized Passport initialization in the app bootstrap.
- Fixed registration to store the submitted `estatus` field correctly.
- Added Windows helper scripts for starting MariaDB and importing the database.
- Added environment templates and local recovery documentation.

## Known Limitations

- MariaDB is currently started as a local user process, not as a Windows service.
- If the machine restarts, MariaDB must be started again with `npm run db:start`.
- Several older controllers and SQL queries still reflect the original student-project style and could benefit from cleanup, validation, and stronger error handling.

## Recommended Next Improvements

1. Normalize route protection so every admin-only route is explicitly guarded.
2. Add proper error handling around database failures and upload failures.
3. Move hardcoded local secrets out of the committed `.env` if this will be shared.
4. Add a small seed or setup command for test users instead of relying on manual SQL state.
5. Clean up inconsistent naming between `inmueble`, `nivel`, `habitacion`, and `anuncios` queries.

## Where To Start In The Code

If you want to understand the project quickly, start here:

1. `ProyectoInm/app.js`
2. `ProyectoInm/routes/index.js`
3. `ProyectoInm/controllers/`
4. `ProyectoInm/model/`
5. `inmobiliaria.sql`

## Notes

This project have been built around the Guatemala real-estate/rental use case, based on the seeded departments and municipalities in the SQL dump.
