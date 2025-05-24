import "../../App.css";

export default function ComicsPage() {
  return (
    <div className="comics-page">
      <a
        href="https://mattstyles.bigcartel.com/?_gl=1*nfy1kj*_gcl_aw*R0NMLjE3NDc5MTgwNjMuQ2owS0NRandscnZCQmhEbkFSSXNBSEVRZ09TUGhUdGtCRFdFTGRQMGhVWm1Id0pUMmZFZWxFRmRLeEp3Z3k3S29fT0N5eTJ1dHROOUhHRWFBdTZWRUFMd193Y0I.*_gcl_au*MTcxNTkzMDgwMy4xNzQ3OTE4MDYzLjEwODYwNzA3NzkuMTc0NzkxODExNi4xNzQ3OTE4MTE1*_ga*MTY3MDE2MjgxMy4xNzQ3OTE4MDYz*_ga_QZ4HDFTSEZ*czE3NDgxMDE2NzUkbzMkZzEkdDE3NDgxMDE2NzckajU4JGwwJGgyMDEyMjkxMDIzJGRoNG8tb050NEVSMGZpMGpzMnpYaGRBTTdpYXhZRkpsY2VR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="comics-header">Comics</h2>
      </a>
      <div className="product-grid">

        {/* Frankie */}
        <div className="product-card">
          <img
            src="/images/frankie-cover.jpg"
            alt="Frankie"
            className="product-image"
          />
          <h3 className="product-title">
            Frankie Langley and the Inter-Galactic Post Office
          </h3>
          <div className="product-card-footer">
            <p className="product-price">$15.00</p>
            <a
              href="https://mattstyles.bigcartel.com/product/frankie-langley-and-the-inter-galactic-post-office"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buy-button">Buy Now</button>
            </a>
          </div>
        </div>

        {/* Benny */}
        <div className="product-card">
          <img
            src="/images/benny-cover.jpg"
            alt="Frankie"
            className="product-image"
          />
          <h3 className="product-title">
            Benny and the Lich
          </h3>
          <div className="product-card-footer">
            <p className="product-price">$10.00</p>
            <a
              href="https://mattstyles.bigcartel.com/product/benny-and-the-lich"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buy-button">Buy Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
