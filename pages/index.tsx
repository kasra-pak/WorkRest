import useCountdown from "@/hooks/useCountdown";
import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";

function Home() {
  const { seconds, playPause } = useCountdown(240);

  return (
    <>
      <ToggleBtn />
      <Countdown seconds={seconds} playPause={playPause} />
    </>
  );
}

export default Home;
