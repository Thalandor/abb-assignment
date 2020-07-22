## Description
This is the assignment for ABB. This assignment it was initially focused on front-end, but I wanted to try to play with docker and socket.io so a node project for the BE is also provided.

## Installation and execution
This project is able to be executed using docker-compose.

To start the applications just execute: 
"docker-compose up -d"

It is docker so it should work directly, however in case it wouldn't work for any reason:
- Go to './backend' and run 'npm install'
- On the backend run 'npm run start'
- On a different command line, go to root again and then to the 'frontend' folder
- Run 'npm install'
- Once it finishes, run 'npm run start'

## Implementation details and points to improve
- The most impacting performance issue would be receiving a lot of messages from the websocket, currently every message received is rendered on the client. However, in case the amount on renders would increase for any reason, a debounce(if the requirements allow it) should be needed to avoid overloading the UI. On this particular case, I would separate the logic of receiving the event from the socket and the painting of the part.
- Code splitting is not used, however, as the number of pages increases, the functionality should be used to help reduce the size of the bundle.
- As there was no need to share state between different components, a system like redux is not used, it introduces a lot of noise on the code for just a short assignment.
- This is a development build, this means, no optimizations by webpack were made (docker executes run start instead of a run build).
- As there was the possibility to implement the backend, I wanted to try to play a bit with docker and socket.io(first time with both).
- I could not find a suitable exclamation circle. The one that looks like  the one on the mock is for pro licenses only.
- The application is quite responsive vertically but not horizontally, it needs improvement on this part. 
- I couldn't figure out a way to set properly a two columns feature on the time I had, probably using media queries or some javascript could make it possible.
