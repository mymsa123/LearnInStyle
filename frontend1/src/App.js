import "./App.css"
import Header from "./components/common/header/Header"
import AllRoutes from "./components/routes/AllRoutes"
import Footer from "./components/common/footer/Footer"
import MyContextProvider from "./components/Context/authContextProvider"
function App() {
  return (
    <>
      <MyContextProvider>
        <Header />
        <AllRoutes/>
        <Footer />
      </MyContextProvider>
    </>
  )
}

export default App
