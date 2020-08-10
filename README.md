This component was bootstrapped with [Direflow](https://direflow.io).

# Content Scroller - Web Component
> An image carousel that automatically changes images. Up to 12 image urls can be placed as attributes.
> Images can be provided with link to a webpage.
>For best performance use images that have the same aspect ratio.



Usage:
Copy the .js file in the build folder and use it like this ->

```html
<script src="./contentScroller.js"></script>
<div class="containing-div">
<content-scroller visibleDivs="2" 
                  image1="hreftoimage1"
                  imageLink1="hrefToDirectTo1"
                  image2="hreftoimage2"
                  imageLink2="hrefToDirectTo2"
                  etc...></content-scroller>
</div>
```
visibleDivs will change the amount of images shown next each other. Supports values 1-3.


