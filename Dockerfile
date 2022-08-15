FROM cypress/included:10.4.0
RUN mkdir /saleor-cypress
WORKDIR /saleor-cypress
COPY . /saleor-cypress/
RUN npm install
RUN npm update
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "chrome-tests"]