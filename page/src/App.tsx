import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Images } from './Components/Images';
import { Header } from './Components/Header';
import { UseContexot } from './Context';
import { Loading } from './Components/Loading';

export function App() {
  const {loading} = UseContexot();
  return (
    <HashRouter>
      <Header/>
      {!loading?(
        <Routes>
        <Route path='/' element={<Navigate to='/images/0'/>}/>
        <Route path='/images' element={<Navigate to='/images/0'/>}/>
        <Route path='/images/:num' element={<Images/>}/>
      </Routes>
      ):<Loading/>}
    </HashRouter>
  )
}


