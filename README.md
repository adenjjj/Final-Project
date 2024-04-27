
The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

# Yum Yum Recipes

## Overview

For this project I created a website that can store recipes for users.  They will be able to input the ingredients and the instrcutions to create a dish.  Users will also be allowed to comment on the recipes as wel as update them for any changes in ingredients or instructions that they found worked better.


## Data Model

The application will store recipes, ingredients, instructions, and comments

users can have multiple recipes (via references)
each list can have multiple ingredients and instructions (by embedding)

An Example Recipe:

```javascript
{
  Author: "adenchef",
  ingredients: // a bullet pointed list of ingreadients with amounts
  instructions: // a paragraph of detailed instrcutions for the recipe
  comments: // a forum style list of comments
}
```

An Example homepage:

```javascript
{
  username: "adenchef's recipes",
  recipes: // a list of recipes that have been written by the user
}
```

An Example login page:

```javascript
{
  username: "adenchef",
  pasword: "*********"
}
```

An Example new user page:

```javascript
{
  username: "adenchef",
  email: "aden@gmail.com",
  pasword: "*********"
}
```






## [Link to Commented First Draft Schema](db.mjs) 

This is the link to the first draft of my schemas

![db](db.mjs)

## Wireframes


/add-recipe - page for creating a new recipe

/recipes - page for showing all recipes

/recipe/# - page for showing specific recipes

/index - page for logging in

/register - new user creation page

## Site map

My site map is linked here

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new recipe
4. as a user, I can view all of the recipes I have made
5. as a user, I can comment on a previously made recipe
6. as a user, I can delete a made recipe
7. as a user, I can edit a previously created recipe


## Research Topics

* (6 points) React
    * I'm used react for the front end framework
    * I used it to create the page's functions
* (6 points) Next.js
    * I used next.js for the front end framework
    * I used it to set up the structure of how my pages interacted
* (2 points) Bootstrap
    * I used Bootstrap in some of my html code

14 points total out of 10 required points

## [Link to Initial Main Project File](index.js) 

This is the link to my inital app initialization
[LinkToInitialProject](index.js)

## Annotations / References Used

1. https://getbootstrap.com to learn about how to use bootstrap
2. https://nextjs.org to learn about how to use next.js
3. I used tercel to deploy my website
