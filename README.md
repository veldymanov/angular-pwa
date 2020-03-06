# AngularPwa

## Start Angular Project
ng new angular-pwa
ng add @angular/material 

ng g m shared
ng g m core

## Copy code from angular-pwa-course
setup small 'server'
create 'proxy.json' file
copy the App

## Add PWA to the project
ng add @angular/pwa
ng g app-shell

## Add push notifications to the project
### server side
npm i -g web-push
npm i web-push
web-push generate-vapid-keys --json