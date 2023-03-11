# Use an official Node.js runtime as a parent image
FROM node:16.13.2

# Install required packages for MySQL
RUN apt-get update && \
    apt-get install -y default-mysql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the NODE_ENV environment variable to production
ENV NODE_ENV=production

ENV WAIT_VERSION 2.7.2

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait

RUN chmod +x /wait

# Copy migration script and set execution permissions
COPY migration.sh /migration.sh
RUN chmod +x /migration.sh

# Expose the port that the application will run on
EXPOSE 3005

