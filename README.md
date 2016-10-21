# squishable-container

This addon provides a container that scales itself to match the available amount of space. 

## Installation

`ember install squishable-container`

## Usage

Wrap your content in `squishable-container`:

```hbs
{{#squishable-container}}
  Your content here.
{{/squishable-container}}
```

Now if anything else changes the width available to squishable-container, it will scale its content up or down to match.

`squishable-container` necessarily needs to decide at what width it should set the scale to 100%. By default, it uses the full viewport width. You can pick a different width by setting the `width` and `unit` properties:

```hbs
{{#squishable-container width=800 unit="px"}}
  Your content here.
{{/squishable-container}}
```

Supported units include em, vw, px, rem, and ex;
