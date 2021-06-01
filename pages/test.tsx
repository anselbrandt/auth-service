import { GITHUB_CALLBACK, TWITTER_CALLBACK, CLIENT } from "../constants";

export default function Home() {
  return (
    <div>
      <div>{GITHUB_CALLBACK}</div>
      <br />
      <div>{TWITTER_CALLBACK}</div>
      <br />
      <div>{CLIENT}</div>
      <br />
    </div>
  );
}
