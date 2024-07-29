import "./App.css";
import Avatar from "./components/Avatar/Avatar";

const App = () => {
  return (
    <div>
      <Avatar
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--G2co0DXE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://avatars.dicebear.com/api/adventurer-neutral/mail%2540ashallendesign.co.uk.svg"
        alt="Pepe"
        type="small"
      />
       <Avatar
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--G2co0DXE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://avatars.dicebear.com/api/adventurer-neutral/mail%2540ashallendesign.co.uk.svg"
        alt="Pepe"
        type="medium"
      />
       <Avatar
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--G2co0DXE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://avatars.dicebear.com/api/adventurer-neutral/mail%2540ashallendesign.co.uk.svg"
        alt="Pepe"
        type="large"
      />
    </div>
  );
};

export default App;
