
# SwiftCase technical challenge

This application was built to 
track the status of a workflow. 

![App Screenshot](https://github.com/johnnywalker-git/sc-dev-test/blob/main/readMe-images/app-screenshot.jpg?raw=true)

Live preview...
https://sc-jw-dev-test.netlify.app/










## User stories:

- A user can input an ID to track the status of a workflow.

- If a user inputs an invalid ID then they will be told to try another.

- If a user does not insert an integer, a warning will let them know that strings etc are not accepted.


## The Stack

As this was just a sample project I wanted to keep things simple. 

I didn't need to use `NextJS` as I usually would because it was only a small application and did not need things like routing etc.

Technoligies I utilised:
- `React`(Vite)
- `Axios`(Network requests)
- `TailwindCSS`(Styling)
- `Iconify`(Icons)




## Installation


```bash
  fork Repo
  npm install 
  npm run dev
  
```
    
## Usage

On page load, when a user insets an ID, the Id is passed to a function on the API which gets all of the tasks associated with that ID.

The result of this are then passed to another function which checks which projects are completed, and if not it adds up the costs of the projects.

This data is then returned in a Modal for the user to see.


## Challenges

I did face some challenges when making this application...

- API requests.

Initially it took some good reading through the documentation to piece together the various parts of the URL I would need to fetch the data.

It was important for me that these variables such as my personal API token be stored somewhere safe for when I eventually pushed to GitHub. So i created environment variables, and added this to a gitignore file.

- Error handling.

My error handling is not at a stage where I would be comfortable testing and sending to production to say the least!! 

Any time a user interacts with an app by supplying information, it is important that the error messages come at the right time and give the right help needed to the user.





## Future improvements

In the future I would like to make the following improvements:

- Building a dedicated test suite in order to make the application more robust and reliable.
- Optimise the performance, or be aware of any detrimental activity to the speed of the application.
- Security - although I can't see any immediate security threats it's important to keep aware, especially if we have user data.
- Incorporating local storage - If we could save results for the in local storage this may be helpful in order to see historical data.
- Although the app is responsive I can definitely improve the over-all look.
- General clean-up and re-factor. Due to time constraints this code isn't as clean as i'd like it and given time I could re-factor things to work better.