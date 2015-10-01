#How to Create "Defend Your Ant Hill Game"!

1. Create boilerplate - `yo galvanize-express` in a new project directory. Make sure to install the dependencies.
1. Add *gulpfile.js* along with the code from the sample [file](https://github.com/mjhea0/gulp-example/blob/master/gulpfile.js)
1. Install dependencies - `npm install --save-dev browser-sync gulp gulp-jshint gulp-nodemon jshint-stylish`
1. Profit  - `gulp`


Design:
1. Draw canvas
2. Draw hill (half circle)
3. Draw gun (rectangle)
4. Draw ants *random locations* (10 rectangles)
5. Draw Bullets *starting location top of gun and fire location based on angle of gun* (circle)
6. Draw life line (2 rectangles *one for image on for progress bar*)
7. 




http://www.browsersync.io/


resources:

http://dev.bennage.com/blog/2013/03/05/game-dev-03/
http://codepen.io/towc/pen/udcIg
http://chimera.labs.oreilly.com/books/1234000001654/ch04.http://chimera.labs.oreilly.com/books/1234000001654/ch04.html#displaying_an_image_on_the_canvas_with
http://jsfiddle.net/L4Qfb/21/

free library of SpriteLib: http://www.widgetworx.com/spritelib/

bullets
https://books.google.com/books?id=hE2Dftq3vEwC&pg=PA391&lpg=PA391&dq=rotate+gun+position+on+canvas+with+arrow+keys&source=bl&ots=CblKVpvMlH&sig=mpl8A7joO_K8Z6oixlBAEllTCLI&hl=en&sa=X&ved=0CB4Q6AEwAGoVChMI54vkgJqgyAIVCwySCh1TGAbt#v=onepage&q=rotate%20gun%20position%20on%20canvas%20with%20arrow%20keys&f=false

#NOTES
Or use the following nice shortcut. This is a “bit-wise” operation that will simplify code, but we do not have the space to go into the full range of bit-wise operations in this text.
```
counter ^= 1;
```
same as:
```
   counter++;
    if (counter >1) {
    counter = 0;
```
