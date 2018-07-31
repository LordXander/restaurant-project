# Mobile Web Specialist Certification Course / Front End Web Development Nanodegree: Restaurant Review

## Table of Contents

* [Project Overview](#project-overview)
* [Installation](#installation)
* [Live View](#live-view)
* [Credits](#credits)
* [Dependencies](#dependencies)
* [Future Updates](#future-updates)
* [Acknowledgements](#acknowledgements)
* [Contributing](#contributing)
* [License](#license)

## Project Overview

This project is part of Udacity's Front End Web Development Nanodegree and the Mobile Web Specialist Certification Course.
Udacity's overview for this project states:
"For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.
[...]
You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality."

## Installation

1. **Zip-Download:** Download the repository as a zip-file, extract it, use Git Bash to change
into the project directory. / **Clone the Repository:** Clone the repository with Git Bash: ```git clone https://danielakuester.github.io/Udacity-Project05-Feed-Reader/```.
2. Run ```git checkout 223fbfb``` to change to the version that is running on a local server. The port of the local server is 8000.
3. In a terminal, check with python -V which version of Python you have installed.
4. Python 2.x: start the server with `python -m SimpleHTTPServer 8000`
5. Python 3.x: start the server with `python3 -m http.server 8000` or `python -m http.server 8000`
6. In Google Chrome, you can also use the [Web Server for Chrome extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb) to simulate a server and then set the port to 8000.

## Live View

The easiest way to look at the website? Check out the live online version on Github: https://danielakuester.github.io/Udacity-Project06-Restaurant-Reviews/

## Credits

* The [Study Jam](https://www.youtube.com/watch?v=TxXwlOAXUko) and the [Walkthrough](https://www.youtube.com/watch?v=jsGs9z7TuyY) by Mohamed Riaad were great
resources to learn more about the basics of the project, to revise ARIA roles
and labels and to brush up my knowledge about accessibility auditioning with the
Lighthouse extension to the Google Dev tools.
* Doug Brown hosted a [webinar about the CSS aspects of the project](https://www.youtube.com/watch?v=92dtrNU1GQc) that is interesting from a
design perspective.

## Dependencies

* The starter code for this project comes from the following [Udacity Restaurant Review repository](http://github.com/udacity/frontend-nanodegree-feedreader). I downloaded it directly as a ZIP-file from my Udacity classroom instead of forking or cloning it. That is why you don't see a connection between the starter code and mine.
* This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). [Mapbox](https://www.mapbox.com/) is free to use, and does not require any payment information.
* I used [this tutorial](https://www.youtube.com/watch?v=BfL3pprhnms) to integrate
the service worker into my project. In retrospective, I would rather like a
simpler version on my future websites (see "Future Updates").

## Future Updates
* The service worker in this project is written in ES5. I am planning to
a) simplify the code and b) to update the code to ES6.

## Acknowledgements
I thank the Udacity team, Mohammed Riaad, the Coding Ninja Turtle Squad and my
study groups for all of their help and support. Without you, this challenging
journey would only be half as much fun as it is right now!

## Contributing

This repository is one of my projects as a Udacity student. I am planning to update the project later to document my learning progress and my growing
programming skills. Therefore, I most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License

(c) Daniela Küster 2018.

This repository is licensed under the [MIT license](https://opensource.org/licenses/MIT).
For further information see [LICENSE](LICENSE)
