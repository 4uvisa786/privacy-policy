import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TermsAndConditions from './pages/TermsAndConditions'
import DeleteAccountForm from './pages/DeleteAccountForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<TermsAndConditions />} />
        <Route path="/delete-account" element={<DeleteAccountForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
