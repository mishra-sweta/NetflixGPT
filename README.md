# NetflixGPT

- React App using Vite
- Configure Tailwind
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp in Firebase (User Account)
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented SignOut
- Update Profile
- Redirect to login page if user is not logged in and vice versa
- Unsubscribed to the onAuthStateChanged Callback
- Add hard coded values to constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- making a movie Slice
- Custom Hook for Now Playing
- Store movies in redux store
- Planning the browse page
- Created MainContainer with all the components (mainContainer - VideoTitle & videoBackGround)
- Fetch dat for trailer video and updated store creating a reducer
- Embedded the YT video and added autoplay
- Build Secondary Component
- Build MovieList
- Build MovieCard
- TMDB Img CDN URL
- Made the Browse page look good
- usePopularMovies , useTopRatedMovies and Upcoming custom hooks
- stored data in Movie slice
- updated the MovieLists with the new data
- GPT Search feature
- GPT SearchBar
- Multi-language feature in our app
- Integrate Groq-SDK GPT APIs
- Configure it with the needed prompt to wrap the input
- Get the movie details from tmdb of the gpt recieved data
- Put it in redux Store
- gptSuggestions Component

# Features

- Login /SignUp page
  - SignIn / SignUp form
  - redirect to Browse Page
- Browse (only after aunthentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - MovieLists

- Netflix GPT
  - Search Bar
  - Movie Suggestions

# Browse Page UI

- Header

- MainVideoContainer

  - VideoBackgroud
  - VideoTitle

- Secondary container
  - MovieList \* n
    - Cards \* n
