import { useEffect } from "react";

function Timer({ dispatch, secondsTimer }) {
  const mins = Math.floor(secondsTimer / 60);
  const seconds = secondsTimer % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tickTock" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
