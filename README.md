<h1 align="center">
  <br>
  <a href="ticketing.dev"><img src="https://i.imgur.com/mzq6srj.png" alt="Ticketing" width="130"></a>
  <br>
  Ticketing
  <br>
</h1>

<h4 align="center">Ticket application under construction...<a href="http://ticketing.dev" target="_blank">Ticketing</a>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a>
</p>

![screenshot](gif)

## Key Features

#### Modern Full-Stack Application

- Frontend built with React and Next.js 15 (using the Page Router for Server-Side Rendering and improved SEO).
- Backend services developed using Node.js and Express.

#### Scalable Microservices Architecture

- Independent services for different domains.
- Deployed as Docker containers orchestrated with Kubernetes on Google Kubernetes Engine (GKE).
- Custom implementation of an Event Bus using NATS Streaming Server for event flow and reliable message delivery.

#### Data Management

- Services use MongoDB and Redis for efficient data storage and caching.
- Addressed data replication challenges and handled unordered event streams in a distributed environment.

#### Reusable Code with Custom Common Library

- Shared reusable code across multiple services via a custom npm organization package.

#### Secure and Reliable APIs

- JWT-based authentication to limit API access.
- Solved concurrency issues within a distributed systems environment.

#### Testing and Code Quality

- Comprehensive testing with Jest to ensure code reliability and correctness.

#### Optimized Development Environment

- Development and production environments hosted on Google Cloud Platform (GCP).

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/yellac/ticket-app.git

# Go into the repository
$ cd ticket-app

# Install dependencies
$ npm install

# Run the app
$ npm start
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Credits

This software uses the following open source packages:

- [![NodeJS][NodeJS]][NodeJS-url]
- [![Express][Express]][Express-url]
- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![MongoDB][MongoDB]][MongoDB-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![Docker][Docker]][Docker-url]
- [![Kubernetes][Kubernetes]][Kubernetes-url]
- [![GCP][GCP]][GCP-url]
- [![JWT][JWT]][JWT-url]
- [![Jest][Jest]][Jest-url]
- [NATS](https://nats.io/)

> [test.com](https://www.test.com) &nbsp;&middot;&nbsp;
> GitHub [@test](https://github.com/yellac) &nbsp;&middot;&nbsp;

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Kubernetes]: https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white
[Kubernetes-url]: https://kubernetes.io/
[GCP]: https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white
[GCP-url]: https://cloud.google.com/?hl=en
[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://jwt.io/
[Express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[Jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
