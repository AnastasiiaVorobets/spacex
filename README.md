- [DEMO](https://anastasiiavorobets.github.io/spacex/)

## Technologies
- Node v16.20.2
- NPM
- React
- Redux(state management)
- TypeScript
- Apollo
- Atomic design Pattern
- Styled Component

## To run the project
- Make a fork
- Clone the project
- Run `npm install` in your terminal
- Run `npm start`
- Open `http://localhost:3000/`
- (available to deploy application to gh-pages)



## HomePage

### Logo
- The logo in the header is a link that always returns to the home page.

### Navigation Menu
- The header navigation menu has a hover effect.
- Home link navigates to the home page (similar to clicking the logo).
- Other links in the header do not trigger any navigation action.

### Header Aside
- The "Favorite" button in the header aside redirects to the favorites page.
- The "Sign in" button has a pressible visual effect but does not perform any redirect.

### Banner
- All content in the banner section is static.
- The "Explore tours" button scrolls down when pressed.

### Main Slider Section
- Static carousel title.
- Carousel controls allow you to navigate between slides.
- Slides contain dynamic data fetched from the SpaceX API.
- Each slider has a "Buy" button with no action on press.
- An "Add to favorite" button adds the trip to your personal favorites list.


## Favorites Page

### Header
- The header section is static.
- The "Favorite" button is active.

### Favorites Section
- "Clean all" button removes all flights from favorites.
- List of favorite flights with each item having:
- A "Buy" button that doesn't perform any action.
- A "Delete" button that removes the specific flight from favorites.
