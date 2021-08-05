FROM node:14

# Create app directory
WORKDIR /src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

COPY . .
# If you are building your code for production
# RUN npm ci --only=production
RUN npx nuxt generate

# Bundle app source
# COPY . .

ENV HOST 0.0.0.0
EXPOSE 3100
CMD [ "npx", "nuxt", "start" ]