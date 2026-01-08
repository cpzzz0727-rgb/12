import { useEffect } from 'react'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Menu from './components/Menu'
import Information from './components/Information'
import Delivery from './components/Delivery'

function App() {
  useEffect(() => {
    // 滾動動畫觀察器
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // 觀察所有需要動畫的元素
    const elements = document.querySelectorAll('.fade-in')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />
      <BrandStory />
      <Menu />
      <Information />
      <Delivery />
    </div>
  )
}

export default App
