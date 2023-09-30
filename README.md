<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/tzuminglu/2FA-with-email">
    <img src="https://www.malwarebytes.com/blog/images/uploads/2018/09/shutterstock_641960737.jpg" alt="Logo" width="600" height="360">
  </a>

  <h3 align="center">Implementing two-factor authentication (2FA) using both email and QR code methods.</h3>

  <p align="center">
    Illustrates the functioning of two-factor authentication (2FA) through an example.
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#reference">Reference</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
<img src="https://github.com/tzuminglu/2FA-with-email/blob/main/example.jpeg" width="300" height="400">
</div>
While there is a wealth of open-source material available that demonstrates how to implement two-factor authentication (2FA), 
there are limited resources showcasing the integration of 2FA with email communication for users. 
The aim of this project is to merge these two aspects into a single resource, providing developers with a comprehensive understanding of how they can work together.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

To develop this project, you will need the following tools:

* [![JavaScript][JavaScript-img]][JavaScript-url]
* [![Express.js][Express.js-img]][Express.js-url]
* [![node.js][node.js-img]][node.js-url]
* [![postman][postman-img]][postman-url]
* [![mongodb][mongodb-img]][mongodb-url]
* [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites


1. Open your terminal, enter the command below, and choose a folder in which to clone the repository.
  ```sh
  git clone https://github.com/tzuminglu/2FA-with-email.git
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Mastering this application becomes achievable by following the steps outlined below

1. Run npm start in terminal
    ```sh
   npm run start
   ```
2. Open Mongodb and postman. And type in user information in the postman to register a new user. (Note: If you enter a non-existent email, you will not be able to receive the email.)
   <div align="center">
    <img src="https://github.com/tzuminglu/2FA-with-email/blob/main/register.png" width="800" height=" 400"> 
  </div> 
3. Verify if MongoDB stores your data. (Note: You can download mongodb compass to help you to check.)
   <div align="center">
    <img src="https://github.com/tzuminglu/2FA-with-email/blob/main/mongodb.png" width="800" height="400"> 
  </div> 
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

[email](1994515daniel@gmail.com) - 1994515daniel@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Reference

* [JWT](https://medium.com/ms-club-of-sliit/jwt-bearer-token-authentication-for-express-js-5e95bf4dead0)
* [JWT decode](https://jwt.io/)
* [Two factor Authentication in Node.Js](https://hackster-origin.medium.com/two-factor-authentication-in-node-js-214efa84f88e)
* [Node.js + MongoDB: User Authentication & Authorization with JWT](https://www.bezkoder.com/node-js-mongodb-auth-jwt/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[JavaScript-img]: https://img.shields.io/badge/logo-javascript-blue?logo=javascript
[Express.js-url]: https://expressjs.com/
[Express.js-img]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[node.js-url]: https://nodejs.org/en
[node.js-img]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[postman-url]: https://www.postman.com/
[postman-img]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[mongodb-url]: https://www.mongodb.com/zh-cn
[mongodb-img]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white