# Overcooked

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

# Commands

Run `docker container run --name overcooked -d -u=$UID:$(id -g $USER) -v $(pwd):/opt/app -w /opt/app -p 4200:4200 -t teracy/angular-cli /bin/bash` to start the container

With the container running we can...

Run `docker exec -ti overcooked ng serve --host=0.0.0.0` to start the server

Run `docker exec -ti overcooked ng g directive|pipe|service|class|guard|interface|enum|module`

Run `docker exec -ti overcooked ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
