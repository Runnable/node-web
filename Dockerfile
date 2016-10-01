FROM node:argon
MAINTAINER Runnable, Inc.

# Cache NPM Install
ADD package.json /var/www/runnable/
WORKDIR /var/www/runnable/
RUN npm install 

# Add Application Files
ADD . /var/www/runnable/
EXPOSE 3000 3001

# Build and Run Application
CMD ["npm start"]
