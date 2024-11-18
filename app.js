
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { registerUser } from "./pages/register.js"; // Import register logic
const app = new Hono();

// Serve the registration form
app.get('/register', async (c) => {
    return c.html(await Deno.readTextFile('./views/register.html'));
});

// Route for user registration (POST request)
app.post('/register', registerUser);

Deno.serve(app.fetch);


// runs on localhost:8000/register
// run with -> deno run --allow-net --allow-env --allow-read --watch app.js
