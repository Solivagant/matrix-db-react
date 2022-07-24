A Matrix fan site, made with React.

I'm a big fan of the Matrix saga and besides this web app, I also wrote a book about the Matrix movies, check it out: [The Matrix Illuminated](https://www.amazon.co.uk/Matrix-Illuminated-Exploring-Philosophies-Behind-ebook/dp/B09BMHS3TX).

## Tech Stack
- react
- react-bootstrap
- redux
- redux-persist
- webpack

## Development History
A web app made with *React*, with built-in content, without using a database.

Developed when I first started learning modern web development and full stack. 

I knew I wanted to make a simple site with photos and posters for the Matrix movies. I didn't want to use a database just yet, so all of the content is packed in with the app.
 
After using *create-react-app*, I added *Redux* to keep track of the user's state. Next I added *Redux Persist* to persist that state.
And then I added content to the *Redux* store's initial state: the actors' information, the posters, and a concept art and storyboard galleries.

The user never affects the state of the app. The initial state is what fills this app with information.

One of the goals of this project was to keep separation of concerns and principles of clean code always in mind. The practice of using different Redux state slices is a great example.

## Webpack
I wanted to include a galleries of images. For the Actor and Movie pages, it was fine to manually include each piece of content to the initial state.

But for a gallery of images, that was untenable. So I learned about including a whole folder's worth of content via Webpack, which I added in index.js.

That also led to having a custom configuration of Webpack, to include a file-loader for images.

The images are passed via props to the React components.

All my components have the React hook useEffect.

For the gallery components, I added a boolean conditional so that the importing of all images, adding them to the Redux store, and creating the cards for each image, only runs once.

The end result is a pleasant experience navigating the app.

## Cool Visuals
I'm proud of the simplicity of using Bootstrap's Fade component paired with a boolean, plus onMouseEnter and onMouseLeave events, to create a nice hover effect on the actors' photos, switching for the photo of the character they play.

```javascript
    <Card key={"actor" + props.index}
      onMouseEnter={() => setIsCharacterShown(true)}
      onMouseLeave={() => setIsCharacterShown(false)}>
      {isCharacterShown &&
        <Fade appear={true} in={isCharacterShown} unmountOnExit={true}>
          <Card.Img className="ActorImg" src={props.actor.photoCharacter} />
        </Fade>
      }
      {!isCharacterShown && (
        <Card.Img className="ActorImg" src={props.actor.photo} />
      )}
      <Card.Title>{props.actor.name}</Card.Title>
      <Card.Text>{props.actor.character}</Card.Text>
    </Card>
```

## Next Steps
- Add a nicer home page
- Improve the experience of navigating the site
- Add content in the form of more actors, text information about each actor and character, movie synopsis


## Docker
I included a Dockerfile so I could learn more about Docker while building this app.

If you want to try it, I followed the steps in this tutorial:
[Using React.js with Docker - Pluralsight](https://www.pluralsight.com/guides/using-react.js-with-docker)

Instructions:

#### Create the docker container
```
docker build -t ps-container:dev .
```

#### Run the app
```
docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:8080 \
-e CHOKIDAR_USEPOLLING=true \
ps-container:dev
```

###  NOTICE
This fan site is not authorised or endorsed by anyone associated with The Matrix or by Warner Bros., nor has it been approved, or licensed by anyone associated with the movies.
