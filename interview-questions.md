# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
  The foreign key would be called animal_id with a data type of integer and a part of Sightings

  Researched answer:
 The foreign key would be called animal_id with a data type of integer and a part of Sightings


2. Which routes must always be passed params and why?

  Your answer:

  Show, destroy, and update because they need to indentify which instance to act on

  Researched answer:

  Show, destroy, and update because they need to indentify which instance to act on


3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:

  http://localhost:3000/main/game/guess

4. Name three rails generator commands. What is created by each?

  Your answer:

  rails g model creates a model
  rails g controller creates a controller
  rails g resources creates both a model and a controller

  Researched answer:

  rails g model creates a model
  rails g controller creates a controller
  rails g resources creates both a model and a controller

5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"    Shows all instances of users

/users/1      method="GET"   Shows just one instance of users with an index of 1

/users/new    method="GET"   creates a new instance

/users/       method="POST"    Creates a new user

/users/1      method="PUT"     updates a current user with an index of 1

/users/1      method="DELETE"  destroys a user with an index of 1
