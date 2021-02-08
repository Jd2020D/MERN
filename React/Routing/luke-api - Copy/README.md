<h1>Luke APIwalker</h1>
<p>You have been given a task as a front-end developer to create a front-end app to navigate the <a href="https://swapi.dev/" target="_blank">Star Wars API</a>.</p>
<figure><img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/star-wars-api-index.png"></figure>
<figure><img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/character-page.png"></figure><p><br></p>
<figure><img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/star-wars-api-planets.png"></figure>
<p>In addition to the index route, you should have a route to display specific characters and a route to display specific planets. Here are a couple considerations to keep in mind:<br></p>
<ul><li>Since the search form is shown on every route and we want to preserve its state across route changes, does it need to be rendered inside each route component?</li><li>Typically we pass an empty array as the second argument to our <code>useEffect</code> calls to ensure that the API request is only made once. How can we force the useEffect callback to also run when the ID for a given route pattern has changed? <strong>Hint:</strong> think about putting a variable inside that array.</li></ul>
<p>By reading the Star Wars API documentation, create a User Interface that does the following tasks:</p>
