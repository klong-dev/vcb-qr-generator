<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <img src="https://vinfruits.com/wp-content/uploads/2024/06/logo-vietcombank-khong-slogan-300x111.png" alt="VietComBank Logo" width="250px" style="margin-left: 20px">
</p>

</p>
<h1 align="center" style="color: green">VietComBank QR Generator</h1>

## Description

[Preview](https://103.252.93.54) demo how the api work

```bash
// Sample json request
{
    "bankNumber": "123456789",
    "content": "testsssssssssss",
    "amount": 1000000
}
```
```bash
// Sample data response
{
    "base64": "data:image/png;base64,<base64 data>"
}
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Resources


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
