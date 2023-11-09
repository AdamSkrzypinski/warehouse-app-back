# Warehouse-App

### (Backend Repository)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://nuidzruvvg.cfolks.pl/)

A simple warehouse management application. Under construction, details in Roadmap.

## Demo

[Warehouse-App]

## Roadmap

- [x] Add/delete/edit/move product
- [x] Add location
- [x] Search product
- [ ] User login/ registration module
- [ ] Stocktaking module
- [ ] History module

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Nodejs][Nodejs]][Nodejs-url]
* [![Typescript][Typescript]][Typescript-url]
* [![Mysql][Mysql]][Mysql-url]
* [![ Nestjs][Nestjs]][Nestjs-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->

## Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/AdamSkrzypinski/warehouse-app-front.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3. Create and configure the database.

4. Go to the directory:
   ```
   /src/config/
   ```   

   rename the file:
   ```
   config.example.ts
   ```
   to:
   ```
   config.ts
   ```

5. Complete the file 'config.ts' with your own configuration data.
   ```
   export const config = {
   dbHost: 'localhost',
   dbUser: 'user',
   dbPassword: 'password',
   dbDatabase: 'database',
   corsOrigin: 'http://localhost:3000',
   };```


6. Run
   ```sh
   # development
   $ npm run start

   # watch mode
   $ npm run start:dev

   # production mode
   $ npm run start:prod   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Frontend Repository Link

https://github.com/AdamSkrzypinski/warehouse-app-front







<!-- CONTACT -->

## Contact

adamskrzy@gmail.com

Project
Link: [https://github.com/AdamSkrzypinski/warehouse-app-front](https://github.com/AdamSkrzypinski/warehouse-app-front)

<p align="right">(<a href="#readme-top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[product-screenshot]: ezgif-3-d4a511a790.gif

[Warehouse-App]:
https://nuidzruvvg.cfolks.pl/

[Typescript]:    https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white

[Typescript-url]: https://www.typescriptlang.org/

[Mysql]:    https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white

[Mysql-url]: https://www.mysql.com/

[Nestjs]:    https://img.shields.io/badge/-NestJs-ea2845?style=flat-square&logo=nestjs&logoColor=white

[Nestjs-url]: https://nestjs.com/


[Nodejs]:    https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white

[Nodejs-url]: https://nodejs.oodejs

