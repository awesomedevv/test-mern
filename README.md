<h1 align="center">
MERN Stack Test Project
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

## clone or download

```terminal
$ git clone https://github.com/passion1989/test-mern.git
$ npm i
```

## project structure

```terminal
LICENSE
package.json
server/
   package.json
client/
   package.json
...
```

# Usage (run Full-stack app on your machine)

## Pre-requirements

- [MongoDB]
- [Node]
- [npm]

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)

```terminal
$ cd client   // go to client folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
```

## Server-side usage(PORT: 8000)

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
```

### Data Seed for users collection

Add 10 dummy users for test.

```terminal
md-seed run users -d
```

For dummy data, didn't make connections (pending, accepted), because it needs actions in UI for establishing connection.
So just put it as empty array.
In real usage, it will have user \_id so that can get connections and pending connections for each user.

### endpoint

```curl
http://localhost:8000/mynetwork/connections?page=1
```

or

```curl
http://localhost:8000/mynetwork/connections
```

## BUGs or comments

[Create new Issues](https://github.com/passion1989/test-mern/issues)

Email Me: wang198904@gmail.com

## Author

[wangzheng9](https://www.linkedin.com/in/jameswangvisionlab)

### License

[MIT]

## Screenshots

![1](1.png?raw=true)

![2](2.png?raw=true)
