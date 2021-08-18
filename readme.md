## Try it out
https://variable-mapper.netlify.app/

The idea would be that you would only have to type in the variable name and value like so:
```scss
    hl-card-padding: 10px;
    // And that would print out this 
    $hl-card-padding: 10px !default; 
    --hl-card-padding: #{$hl-card-padding};
```

It would respect up to one line break. Meaning if there are double spaces or more then it would reduce that to just once space between variable declarations. (working on it)

It would add the '!default' to the end of your sass vars. Will maybe make this optional in the future.
