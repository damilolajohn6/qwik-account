const FAQGrid = () => {
  const faqs = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    },
    {
      id: 5,
      question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    },
    {
      id: 6,
      question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    },
  ];

  return (
    <section className="bg-[#FCE5E3] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1C2434]">Faq</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id} className="flex items-start gap-4">
            <span className="text-2xl font-bold text-[#1C2434]">{faq.id}</span>
            <div>
              <h3 className="text-lg font-semibold text-[#1C2434] leading-snug">
                {faq.question}
              </h3>
              <p className="text-[#475569] text-sm mt-1">
                <span className="font-medium">Ans</span> {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQGrid;
