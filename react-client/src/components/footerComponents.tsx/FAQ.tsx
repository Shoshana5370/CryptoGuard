const faqs = [
    {
        question: "What is this application about?",
        answer: "This application provides users with helpful tools and resources."
    },
    {
        question: "How do I contact support?",
        answer: "You can contact support via the Contact Us page or by emailing support@example.com."
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we take data security seriously and use industry-standard practices."
    }
];

const FAQ= () => (
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: "1rem" }}>
        <h2>Frequently Asked Questions</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
            {faqs.map((faq, idx) => (
                <li key={idx} style={{ marginBottom: "1.5rem" }}>
                    <strong>{faq.question}</strong>
                    <p style={{ margin: "0.5rem 0 0 0" }}>{faq.answer}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default FAQ;