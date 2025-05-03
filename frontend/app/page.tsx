import Welcome from "./components/welcome";
import ProgressBar from "./components/progressbar";
import Notification from "./components/notification";
import Waitlist from "./components/waitlist";
import Status from "./components/status";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 px-5 pt-5 sm:px-30 sm:pt-20">

      <Welcome/>
      <Status/>
      <ProgressBar/>
      <Waitlist/>
      <Notification/>

    </div>
  );
}
