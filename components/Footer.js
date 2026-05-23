export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p className="footer-text">
        Established {year} &nbsp;·&nbsp; Rijeka, Croatia &nbsp;·&nbsp; All rights reserved
      </p>
    </footer>
  )
}