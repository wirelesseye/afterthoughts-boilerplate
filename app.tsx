import { createApp } from "afterthoughts";

const App = createApp(({ children }) => (
    <div>
        App
        {children}
    </div>
));

export default App;
