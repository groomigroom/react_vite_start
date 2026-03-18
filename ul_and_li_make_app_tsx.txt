const App = () => {
  const children = [
    <li key="1">
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <p>구글로 가세요</p>
      </a>
    </li>,
    <li key="2">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <p>인스타로 가세요</p>
      </a>
    </li>,
    <li key="3">
      <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer">
        <p>네이버로 가세요</p>
      </a>
    </li>
  ]

  return <ul>{children}</ul>
}

export default App
