import Accordion, {type AccordionItem } from '../../components/ui/Accordion/Accordion.tsx';
import './Faq.css'

const FAQSection = () => {
    const faqData: AccordionItem[] = [
        {
            id: "pricing-plans",
            title: "Do you have specific pricing plans to show?",
            content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment."
        },
        {
            id: "experience",
            title: "How many years of experience do you have?",
            content: "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget."
        },
        {
            id: "companies",
            title: "What companies have you worked with?",
            content: "We have collaborated with various industry leaders, from fast-growing tech startups to established financial institutions, delivering high-quality design solutions."
        },
        {
            id: "safety",
            title: "Am I safe leaving my company in your hands?",
            content: "Absolutely. We prioritize confidentiality and professional integrity. Our processes are designed to ensure your brand's assets and strategic goals are handled with the utmost care."
        }
    ];

    return (
        <div className='faq-container'>
            <Accordion items={faqData}/>
            <section>
                <form action="#" method="POST">
                    <div className="form-group">
                        <textarea
                            id="user-question"
                            name="question"
                            placeholder="Ask us what you want to know..."
                            required
                        ></textarea>
                    </div>

                    <div className="form-footer">
                        <p>We will answer your questions via email within 48 hours.</p>

                        <button type="submit">Send</button>
                    </div>
                </form>
            </section>
        </div>

    );
};

export default FAQSection;