# Static Blog
A simple blog site for hosting on github pages.

## Getting Started

Clone down this repository:

```
git clone https://github.com/ian-antking/static-blog.git
```

Install dependencies 

```
npm i
```

This project needs to be able to access the data stored in `content/posts.js`. This type of access is usally blocked by the browser for security reasons. To get around this we need to run the project in a virtual webserver. In this case we are using `http-server`. To run this, use the command:

```
npm start
```

Once this is running, open your web browser and go to the url you see in your terminal.

## Editing Posts

Posts are stored in `content/posts.json`. Two placeholder posts are provided as examples. New post objects can be added to the array in this file.

## Loading Post On To The Page

The script in `scripts/get-posts.js` fetches the json object from `content/posts.json` and loads it into JavaScript. It then iterates over the array and appends a `div` element containing the post content into the `index.html`. Specifically the `div` with the id of `posts`. 

## Making It Your Own

Try building your own coding blog around this skeleton. Edit `get-posts.js` to add `css` classes to the different element of the blog posts, and then style them in `styles/main.css`. Try to deploy the finished product on github pages. 