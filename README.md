# Browser renderer

Use for SSR rendering on specific app

## How to run local

Create .env file with content:

``` properties
TARGET_HOST=http://your.target.host
```

Then run script:

``` sh
yarn install
node app
```


## How to build

```
docker build -t browser-renderer .
```

Then run the built image, example docker-compose will be like this:

``` yaml
version: '3.1'

services:
  browser-renderer:
    image: browser-renderer
    restart: always
    cap_add:
      - SYS_ADMIN
    ports:
      - 2769:3000
    environment:
      - TARGET_HOST=http://your-target-host



```
