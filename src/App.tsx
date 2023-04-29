import { createSignal } from "cinnabun"
import { Link, Route, Router } from "cinnabun/router"
import {
  SignalsExample,
  ContextExample,
  SuspenseExample,
  NestedRoutingExample,
  ToDoExample,
} from "./components"

const pathStore = createSignal(window.location.pathname)

export const App = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <h1>Cinnabun JS</h1>
      <br />
      <nav>
        <ul>
          <li>
            <Link to="/" innerText="Signals" store={pathStore} />
          </li>
          <li>
            <Link to="/context" innerText="Context" store={pathStore} />
          </li>
          <li>
            <Link to="/suspense" innerText="Suspense" store={pathStore} />
          </li>
          <li>
            <Link
              to="/nested-routing"
              innerText="Nested Routing"
              store={pathStore}
            />
          </li>
          <li>
            <Link to="/todo" innerText="ToDo" store={pathStore} />
          </li>
        </ul>
      </nav>

      <main style={{ textAlign: "center", flexGrow: "1" }}>
        <Router store={pathStore}>
          <Route path="/" component={<SignalsExample />} />
          <Route path="/context" component={<ContextExample />} />
          <Route path="/suspense" component={<SuspenseExample cache />} />
          <Route
            path="/nested-routing"
            component={<NestedRoutingExample {...{ pathStore }} />}
          />
          <Route path="/todo" component={<ToDoExample />} />
        </Router>
      </main>
    </div>
  )
}