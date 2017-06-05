# InstagramLike
Something vaguely resembling instagram.

To Run:
1) Clone repo
2) (From directory of repo) npm install
3) Create an empty sqlite3 database file named 'db.db' and place in the db folder.
4) Run DB Migrations by running: node node_modules/sequelize-cli/bin/sequelize db:migrate
5) Start webpack watcher by running: npm run dev-react
6) Start the server by running: npm start

Usage:
1) Point browser to 127.0.0.1:3000
2) Click the "Upload a new Image" link or point browser to 127.0.0.1:3000/upload to access photo upload page.
2a) Enter your username, caption and hashtags (comma seperated). 
2b) Drag your image (less than 2 mb) to the dropzone to upload. Alternatively, click on the dropzone to select a file.
3) By default, the last 10 images uploaded are displayed.
4) Search Options: 
	- @author searches for all images uploaded by author.
	- #hashtag searches for all images containing that hashtag.
	- TERM searches for all images that contain TERM in the caption.
	- (empty string) Display 10 latest images.
5) Comments: To comment on an image, simply enter your username and comment and press submit.

That should be it! Have fun! :-)