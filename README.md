# Blog API 📝
>A simple RESTful API created using Node.js Express is used to create blogs associated with separate bloggers.

#### **dependencies used**
- express
- cors
- nodemon
- body-parser
- mongoose

---

#### Steps to run the API on yoour local systems
1. clone project on your system

``$ git clone https://github.com/TheEagerLearner/BlogApi.git``

2. install dependencies

``$ npm install``

3. start mongodb server

``$ mongod``


4. start API

``$ npm start``

The app will start running at http://localhost:3000


## Explore Rest APIs
---
The app defines following CRUD APIs.

### Blog

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /blogs/{id} | Get a single blog having the particular id | |
| GET    | /api/blogs/ | Get all blogs | |
| POST    | /blogs/ | Post blog | [JSON](#blogcreate)  |
| PUT    | /blogs/{id} | Update a blog having the the given id | [JSON](#updateblog) |
| DELETE    | /blogs/ | Delete a blog having the provided id | [JSON](#deleteblog) |

### Blogger

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /blogger/{id} | Get blogger details | |
| POST    | /blogger/signup/ | Register blogger | [JSON](#bloggercreate)  |
| DELETE    | /blogger/{id} | Delete a blogger having the provided id | |


## Sample Valid JSON Request Bodys

##### <a id="blogcreate">Create Blog -> /blogs/</a>
```json
{
    "title":"What is This",
    "blog":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "bloggerId":"63df373e352dc1dd4669a3cc"
}
```

##### <a id="updateblog">Create Blog -> /blogs/</a>
```json
{
    "title": "The One",
    "blog": "Lorem Ipsum is simply dummy text of the printing and typeset aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
```

##### <a id="deleteblog">Create Blog -> /blogs/</a>
```json
{
    "id":"63df3c9acfb125c6ade03ab1"
}
```

##### <a id="bloggercreate">Create Blogger -> /blogger/signup/</a>
```json
{
    "username":"Senku",
    "email":"abc@xyz.com"
}
```