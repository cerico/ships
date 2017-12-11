![screenshot](https://s3.eu-west-2.amazonaws.com/io1937/musicali/player.jpeg)

## Setup

Should run with all modern versions of node. 

```
➜  musico git:(master) node -v
v8.9.1
➜  musico git:(master) npm -v
5.5.1
```

## Start
```
➜  musico git:(master) npm run dev
```

Browse to http://localhost:3404

## Build / Serve production
```
➜  musico git:(master) npm run build
➜  musico git:(master) npm run start
```

Browse to http://localhost:9002

## Deploy

```
➜  musico git:(master) npm run deploy
```

Browse to http://ships.malham.io/

Hosted at Digital Ocean (Centos 6.5)

Served with Nginx and Pm2

