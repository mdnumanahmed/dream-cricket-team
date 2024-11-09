# Dream Cricket Team

**Project Description

This project is a web application to manage and select players for a fantasy team, with design elements based on a Figma template. Users have a set amount of in-app currency (coins) and can increase their coins to select players. The application allows toggling between available and selected players, includes an interactive Navbar and Banner, and provides notifications for actions like adding or removing players.

- 
- [Dream Cricket Team](https://github.com/vitejs/vite-plugin-react-swc)

# Key Features
- Navbar and Coin Display: Shows the user’s coin balance (starting at 0) in the Navbar.

- Banner with Coin Increase: A banner with a button that increases the user’s coin count on each click, allowing the user to select more players.

Player Data & Display:

- Data for 10–15 players is loaded from a JSON file, containing details like player name, role, country, price, and type.
- Players are displayed in a card layout with a "Choose Player" button for selection.

Player Selection & Validation:

- Players can be added to a "Selected Players" section if the user has enough coins.
- Maximum of 6 players can be selected.
- Validation prevents duplicate selections and shows alerts if rules are violated (using React-Toastify for notifications).

Available & Selected View Toggling:
- A toggle button to switch views between available and selected players, with a counter showing selected players.
- Remove Player Functionality: A remove button on each selected player card to deselect players.

Additional UI Sections:

Newsletter: Section for user subscription.
Footer: Styled according to the Figma design.
"Add More Players" Button: Displays available players again after some have been selected.

Application Customization: Custom web application title in place of the default Vite-react title.

Notifications: Uses React-Toastify for all alerts and messages, enhancing the user experience.

These features will collectively create a well-structured, interactive player selection web application.
