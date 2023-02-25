import useCountdown from "@/hooks/useCountdown";
import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";

function Home() {
  const { seconds, playPause } = useCountdown(240);

  return (
    <main>
      <ToggleBtn />
      <Countdown seconds={seconds} playPause={playPause} />
    </main>
  );
}

export default Home;
