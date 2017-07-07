# minimalist-electron-react
Dead simple boilerplate to start wrtiting desktop apps with JS

## Get started
```
$ npm i
$ npm start
```

And off you go! 🚀

While it's seemless to '_require_' modules in Node, the browser does not natively support this. Which is why if you want to use _React_, you either have to use a module bundler like webpack, or use a lot of ugly <script> tags in your html file.

With __Electron__, we have access to both the _browser_ environment, and the _node_ environment, which means there's no need for either of the above options! Just '_require_' your modules right out of the box!
