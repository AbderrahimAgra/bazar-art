#!/bin/sh

# Database credentials
DB_HOST="db"
DB_PORT="3306"
DB_NAME="craft"
DB_USER="root"
DB_PASSWORD="root"

MIGRATION_FILE="migrations.sql"

echo "Applying migrations..."
npm run migratedeploy
mysql --user="$DB_USER" --password="$DB_PASSWORD" --host="$DB_HOST" --port="$DB_PORT" "$DB_NAME" < "$MIGRATION_FILE"

if [ $? -eq 0 ]; then
  echo "Migrations applied successfully."
else
  echo "Error applying migrations."
  exit 1
fi


echo "Starting application..."
npm run start:prod