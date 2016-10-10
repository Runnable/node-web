FROM node:argon
MAINTAINER Runnable, Inc.

# Cache NPM Install
ADD package.json /app/
WORKDIR /app/
RUN npm install 

# Add Application Files
ADD . /app/
EXPOSE 3000

# Run Application
CMD ["npm start"]
