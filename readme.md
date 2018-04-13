# Chrome-PDF Docker Container

API can be run by simply invoking make:
```
make
```

## Usage

The server should now listen on port `8000` and accept `text/html` body. It will then return `pdf` mime type with resulting PDF.

```
curl -X POST \
  http://localhost:8000/ \
  -H 'content-type: text/html' \
  -d '<h1>Test</h1>'
```

## Maintainers

- [Dávid Mikuš](https://github.com/dasio)
- [Peter Malina](https://github.com/gelidus)