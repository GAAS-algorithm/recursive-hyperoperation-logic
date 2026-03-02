import { Route, Router, Navigate } from "@solidjs/router";
import Layout from "./Layout";

function RedirectToEn() {
  return <Navigate href="/en" />;
}

export default function App() {
  return (
    <Router>
      <Route path="/" component={RedirectToEn} />
      <Route path="/:lang/:page?/:subpage?" component={Layout} />
    </Router>
  );
}
