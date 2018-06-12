This is a weather app made in node.js. I am using the DarkSky weather API to get real-time weather update.

node app.js -a '1234'
node -- to run the application
app.js -- this is the javascript code for our app
-a -- this is the address
'1234' -- address of the location you want

The way it works is that you enter the address for any location. You can also enter the name. Try to get as close as you can. The more descriptive
you are, the closer it will be. For example, you can enter the following:

node app.js -a 'Sunnyville CA' 
This will give you the weather for this location and also what it feels like.
