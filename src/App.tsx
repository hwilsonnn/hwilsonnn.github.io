import Root from "./routes"
import background from "./assets/bgImage.svg"

const App = () => (
  <div
    className="flex h-screen w-full flex-row justify-center overflow-x-hidden"
    style={{ backgroundImage: `url(${background})` }}
  >
    <Root />
  </div>
)

export default App
