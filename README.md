# Platform client

In this project, I built a React blogging client using Redux for state management and an externally provided rest API for data population. All state having to do with posts (list of posts, current post) is contained in the Redux store and retrieved by components in my application using the useSelector hook. This allows for a much cleaner code base with minimal prop drilling. The app supports creating posts, updating posts, deleting posts, and viewing posts.

[deployed url](https://tfenaroli-lab4.onrender.com)

## What Worked Well
What worked well in this lab was styling. I used React-Bootstrap as my component library, and Bootstrap as my styling library. This made styling extremely easy and efficient, allowing me to instead focus on the core CRUD functionality of the app.

## What Didn't
Everything ended up working well, but I had a bit of trouble wrapping my head around using thunks in Redux. The concept of having action creators return functions instead of objects took some time to make sense -- I found that getting my hands dirty and actually implementing them helped a lot.

## Extra Credit
- search by tags functionality
- client-side form input validation (can't create posts with empty title, for example)

## Screenshots
- search by tags functionality
<img width="1439" alt="Screenshot 2023-05-04 at 2 14 31 PM" src="https://user-images.githubusercontent.com/83674002/236292763-592c2546-b17c-4b0d-ae9c-93b2769bbb42.png">

- client-side form input validation (can't create posts with empty title, for example)
<img width="872" alt="Screenshot 2023-05-04 at 2 14 56 PM" src="https://user-images.githubusercontent.com/83674002/236292871-8a0e856d-8881-4f28-b946-a883f92b82a9.png">
