module.exports = data => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Booking Inquiry</title>
</head>

<body>
  <header>

  </header>
  <main>
    <section>
      <h2>Hello Masha!</h2>
      <p>
        My name is, ${data.firstName} ${data.lastName} and I came across your website just now. I am very interested after seeing your
        body of work in hiring you as the photographer for my next event. Please feel free to contact me either by email,
        ${data.email} or by phone, ${data.phone}.
      </p>
      <p>${data.message}</p>
    </section>
  </main>
</body>

</html>
`
