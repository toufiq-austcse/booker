
# Booker

A Bookmark Manager App

## Dependencies
- MongoDB : As data storage
- GraphQL
- Docker : To build and run the deployment images
- FE: ReactJs, Ant Design

## Screenshots
Some screenshots of the application.
![Login Page](https://raw.githubusercontent.com/toufiq-austcse/booker/master/screenshots/login.png)
*Login page*
![Signup Page](https://raw.githubusercontent.com/toufiq-austcse/booker/master/screenshots/signup.png)
*Signup page*
![Create Deployment Part-1](https://raw.githubusercontent.com/toufiq-austcse/booker/master/screenshots/home.png)
*Home Page*
![Home](https://raw.githubusercontent.com/toufiq-austcse/booker/master/screenshots/create_folder.png)
*Create Folder*
![URL](https://raw.githubusercontent.com/toufiq-austcse/booker/master/screenshots/view_all_links.png)
*View All Links*
![Details Page](https://raw.githubusercontent.com/toufiq-austcse/booker/master/screenshots/bookmark_url.png)
*Bookmark Url*



## Database Schema
```
users {
    _id: ObjectID,
    email: string,
    password: string,
}

links {
    _id: ObjectId,
    name: string,
    user_id: string,
    links: string[]
}


```
