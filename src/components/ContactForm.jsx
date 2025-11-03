import { useState } from 'react';
import axios from 'axios';


export default function ContactForm() {
const [form, setForm] = useState({ name: '', email: '', message: '' });
const [success, setSuccess] = useState(false);


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
e.preventDefault();
try {
await axios.post('/api/messages', form);
setSuccess(true);
setForm({ name: '', email: '', message: '' });
} catch (err) {
console.error(err);
}
};


return (
<section id="contact" className="my-12">
<h2 className="text-2xl font-bold mb-4">Contact Me</h2>
{success && <p className="text-green-400">Message sent!</p>}
<form onSubmit={handleSubmit} className="grid gap-4 max-w-lg">
<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Your Name"
className="p-2 rounded bg-gray-700"
required
/>
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Your Email"
className="p-2 rounded bg-gray-700"
required
/>
<textarea
name="message"
value={form.message}
onChange={handleChange}
placeholder="Your Message"
className="p-2 rounded bg-gray-700"
rows="4"
required
></textarea>
<button type="submit" className="px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600">
Send
</button>
</form>
</section>
);
}