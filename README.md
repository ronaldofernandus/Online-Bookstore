# Tata Cara run project Online Book Store

1.Masuk ke dalam folder backend dan frontend dengan perintah cd backend
2.Ketik npm install pada backend dan npm install . pada frontend
3.setelah NPM terinstall, ketik npx sequelize-cli db:create pada terminal backend untuk create database di postgreSQL dan ketik npx sequelize-cli db:migrate untuk migration database ke dbeaver

3.Setelah itu, jalankan NPM start pada backend dan frontend

4.Masuk ke halaman login, jika belum mempunyai akun, silahkan register.

5.Masuk ke localhost:3005/registerCMS , jika ingin registrasi sebagai admin.

URL for Routing User

1.localhost:3005/login ==> Display Login Page
2.localhost:3005/registerUser ==> Display Register User Page
4.localhost:3005/user/home ==> Display User Home Page
5.localhost:3005/user/cart ==> Display Cart Page
6.localhost:3005/user/orders ==> Display Order Page
7.localhost:3005/user/profile ==> Display Profile Page

URL for Routing Admin

1.localhost:3005/login ==> Display Login Page
2.localhost:3005/registerCMS ==> Display Register Admin Page
4.localhost:3005/cms/dashboard/ ==> Display Admin Dashboard Page
5.localhost:3005/cms/profile ==> Display Profile Admin Page
6.localhost:3005/cms/editProfile ==> Display Edit Profile Admin Page
7.localhost:3005/cms/details/:id ==> Display Detail Product Page
8.localhost:3005/cms/edit/:id ==> Display Edit Product Page

API Documentation User

1.HTTP Method POST ==> localhost:3005/login ==> Login
2.HTTP Method POST ==> localhost:3005/registerUser ==>Register User
4.HTTP Method GET ==> localhost:3005/user/home ==> Display User Home Page
5.HTTP Method POST ==> localhost:3005/user/cart/detail/:id ==> Add To Cart
6.HTTP Method POST ==> localhost:3005/user/orders ==> Display Order Page

API Documentation User

1.HTTP Method POST ==> localhost:3005/login ==> Login Admin
2.HTTP Method POST ==> localhost:3005/registerCMS ==> Register Admin
4.HTTP Method GET ==> localhost:3005/cms/dashboard/ ==> Get Book
5.HTTP Method GET ==> localhost:3005/cms/profile ==> GET Profile
6.HTTP Method POST ==> localhost:3005/cms/editProfile ==> Edit Profile Admin
7.HTTP Method GET ==> localhost:3005/cms/details/:id ==> GET Product Page
8.HTTP Method POST ==> localhost:3005/cms/edit/:id ==> Edit Product
