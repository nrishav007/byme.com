# byme_Clone_Backend
It is the repo of the backend of byme clone website. We use this repo to make the API's of the wesite. Here is the repo link of frontend part 
https://github.com/nrishav007/longing-carpenter-4207
# Endpoints
# Home
display all data =>/api/home<br>
display particular object =>/api/home/:objectname
# USER
user registration => /signup<br>
user login =>/login<br>
user read (for admin)=> /user<br>
user create (for admin)=> /user/create<br>
user update (for admin)=> /user/update/:id<br>
user delete (for admin)=> /user/delete/:id
# PRODUCT
product read => /product<br>
product read particular data type(men/women)=>/product/:type<br>
product read particular data type(men/women) and category=>/product/:type?category=:categoryname&limit=:limit<br>
product disply single data => /product/single/:id<br>
product create (for admin)=> /product/create<br>
product update (for admin)=> /product/update/:id<br>
product delete (for admin)=> /product/delete/:id
# CART
cart read => /cart<br>
cart create => /cart/create<br>
cart delete => /cart/delete/:id
# WISH
wish read => /wish<br>
wish create => /wish/create<br>
wish delete => /wish/delete/:id
