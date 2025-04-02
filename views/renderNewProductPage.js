const renderNewProductPage = (data) => {
  let content = `
    <html>
    <head><title>Shop - Newest product</title></head>
    <body>
    <h1>Newest product</h1>
    <nav>
      <a href='/'>Home Page</a><br />
      <a href='/product/add'>Add product</a><br />
      <a href='/logout'>Logout</a>
    </nav>
  `;

  if (!data) {
    content += `<br /><div>No new products available.</div>`;
  } else {
    content += `<br /><div>New product data - ${data}</div>`;
  }

  content += `
    </body>
    </html>
  `;

  return content;
};

module.exports = renderNewProductPage;
