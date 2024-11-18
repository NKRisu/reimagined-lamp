


import { Hono } from "https://deno.land/x/hono/mod.ts";
import { registerUser } from "./pages/register.js"; // Import register logic

const app = new Hono();

// Attempting to add middleware to erase some of the ZAP alerts
// Content Security Policies, X-Grame-Options set, X-Content-Tyope-Options set
app.use('*', (c, next) => {
  c.header('Content-Security-Policy', "default-src 'self'; script-src 'self' https://ajax.googleapis.com https://cdnjs.cloudflare.com; style-src 'self' https://stackpath.bootstrapcdn.com; img-src 'self' data:; connect-src 'self'; font-src 'self' https://use.fontawesome.com; object-src 'none'; frame-src 'none'; frame-ancestors 'none'; form-action 'self'");
  c.header('X-Frame-Options', 'DENY');
  c.header('X-Content-Type-Options', 'nosniff');
  return next();
});

// Serve the registration form
app.get('/register', async (c) => {
  return c.html(await Deno.readTextFile('./views/register.html'));
});

// Route for user registration (POST request)
app.post('/register', registerUser);

Deno.serve(app.fetch);



// runs on localhost:8000/register
// run with -> deno run --allow-net --allow-env --allow-read --watch app.js
