import "./App.css";
import Table from "./components/Table";
function App () {
  let rockyObj = {
    Name: "Rocky",
    FavoriteFood: "Sushi",
    FavoriteMovie: "Back to The Future",
    Status: "Inactive",
  };
  let miroslavObj = {
    Name: "Miroslav",
    FavoriteFood: "Sushi",
    FavoriteMovie: "American Psycho",
    Status: "Active",
  };
  let donnyObj = {
    Name: "Donny",
    FavoriteFood: "Singapore chow mei fun",
    FavoriteMovie: "The Princess Bride",
    Status: "Inactive",
  };
  let mattObj = {
    Name: "Matt",
    FavoriteFood: "Brisket Tacos",
    FavoriteMovie: "The Princess Bride",
    Status: "Active",
  };

  const listUsers = [rockyObj, miroslavObj, donnyObj, mattObj];

  return (
    <div>
      <h1>Display Data: </h1>
      <Table listUsers={listUsers} />
    </div>
  );
};

export default App;