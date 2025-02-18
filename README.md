# Nodejs

npm init -y
npm install express
(package.json altındaki dependency bölümüne "express" yüklenmiş olur. )
index.js
(express server kurulur.)
npm install -g nodemon
nodemon, Node.js projelerinde kullanılan bir geliştirme aracıdır. Kod dosyalarında yapılan değişiklikleri algılayarak uygulamayı otomatik olarak yeniden başlatır.
"scripts": {
"start": "node app.js",
"dev": "nodemon app.js"
} >npm run dev
