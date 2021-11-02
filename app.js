function App() {
  return (
    <div>
      <Tweet
        name="First guy"
        username="1stGuy"
        date={new Date().toDateString()}
        message="My first tweet"
      />
      <Tweet
        name="Second Girl"
        username="2ndGirl"
        date={new Date().toDateString()}
        message="Pretty cool!"
      />
      <Tweet
        name="Third Dude"
        username="3rdDude"
        date={new Date().toDateString()}
        message="3rd the golden thunder bird."
      />
    </div>
  );
}