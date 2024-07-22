import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'

function Home () {
  return <div>Home</div>
}

function SPA1 () {
  return <div>SPA1</div>
}

function SPA2 () {
  return <div>SPA2</div>
}

function Links () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 8, alignSelf: 'center'}}>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/spa1">SPA1</Link></div>
        <div><Link to="/spa2">SPA2</Link></div>
      </div>
      <div style={{ display: 'flex', alignSelf: 'center'}}>
        <Outlet/>
      </div>
    </div>
  )
}

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/spa1" element={<SPA1/>}/>
          <Route path="/spa2" element={<SPA2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
